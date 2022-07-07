async function PaginatedAPIRetrieve<T>(
    callback: (limit: number, nextToken?: string) => Promise<any>,
    nextToken?: string,
    limit = 25,
    previousResponse: T[] = []
): Promise<T[]> {
    return await callback(limit, nextToken)
        .then((res) => {
            const response = [...previousResponse, ...res.Users];
            if (res.NextToken) {
                return PaginatedAPIRetrieve(
                    callback,
                    res.NextToken,
                    limit,
                    response
                );
            }
            return response;
        })
        .catch((err) => {
            console.log(err);
            return Promise.reject(err);
        });
}

export default PaginatedAPIRetrieve;
