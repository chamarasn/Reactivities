export interface Pagination {
    currentPage: number;
    itemsPerPAge: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> {
    data: T;
    pagination: Pagination;

    constructor(data: T, pagination: Pagination){
        this.data = data;
        this.pagination = pagination;
    }
}

export class PagingParams {
    pageNumber = 1;
    pageSize = 2;

    constructor(pageNumber = 1, pageSize = 2) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
}
