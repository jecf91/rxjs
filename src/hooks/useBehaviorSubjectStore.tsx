import { useEffect, useState } from "react";
import { BehaviorSubjectStore, PersonState } from "../storeBehaviorSubjectWay";

export const useBehaviorSubjectStore = () => {
  const [personStore, setPersonStore] = useState<PersonState>({
    data: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    const personsSub =
      BehaviorSubjectStore.getObservable().subscribe(setPersonStore);
    BehaviorSubjectStore.load();
    return () => {
      personsSub.unsubscribe();
    };
  }, []);

  return {
    data: personStore.data,
    error: personStore.error,
    loading: personStore.loading,
    retry: BehaviorSubjectStore.retry,
  };
};
