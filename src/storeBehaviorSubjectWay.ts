import { BehaviorSubject, catchError, from, of, tap } from "rxjs";
import { Person } from "./models";
import { getPersons } from "./services/person";

export interface PersonState {
  data: Person[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonState = {
  data: [],
  loading: false,
  error: null,
};

class PersonStore {
  private state$ = new BehaviorSubject<PersonState>(initialState);

  getObservable() {
    return this.state$.asObservable();
  }

  private setState(partial: Partial<PersonState>) {
    const current = this.state$.getValue();
    this.state$.next({ ...current, ...partial });
  }

  load() {
    this.setState({ loading: true, error: null });

    from(getPersons())
      .pipe(
        tap((data) => {
          this.setState({ data, loading: false });
        }),
        catchError((err) => {
          this.setState({
            error: err.message || "Something went wrong...",
            loading: false,
            data: [],
          });
          return of(null);
        })
      )
      .subscribe();
  }

  retry() {
    this.load();
  }
}

export const BehaviorSubjectStore = new PersonStore();
