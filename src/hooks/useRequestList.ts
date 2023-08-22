import  { useCallback, useState } from 'react';

export function useRequestList<T>(func:Function) {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [lists, setLists] = useState<T[]>([]);
    const [page, setPage] = useState<number>(1);

    const loadData = useCallback(() => {
        setPage(1);
        setHasMore(true);
        fetchList(false);
    }, []);

    const loadMore = useCallback(() => {
        if (isLoading) return;
        setPage(page + 1);
        fetchList(true);
    }, [isLoading, page]);

    const fetchList = useCallback(
        (isLoadMore: boolean) => {
            setLoading(true);
            if (!isLoadMore) {
                setLists([]);
            }

            func && func();            
        },
        [isLoading, hasMore, lists, page],
    );

    return {lists, isLoading, hasMore, page, loadData, loadMore, setLists, setHasMore, setLoading};
}
