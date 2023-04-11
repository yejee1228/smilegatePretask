import * as A from '../styles/adminStyle'

const Pagination = ({ currentPage, totalPages, goToPage }: { currentPage: number, totalPages: number, goToPage: (x: number) => void; }) => {

    return (
        <A.Pagination>
            <A.PageButton disabled={currentPage === 1} onClick={() => goToPage(1)}>
                {'<<'}
            </A.PageButton>
            <A.PageButton disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
                {'<'}
            </A.PageButton>
            {Array.from({ length: totalPages }, (_, index) => (
                <A.PageButton key={index} onClick={() => goToPage(index + 1)}>
                    {index + 1}
                </A.PageButton>
            ))}
            <A.PageButton disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
                {'>'}
            </A.PageButton>
            <A.PageButton disabled={currentPage === totalPages} onClick={() => goToPage(totalPages)}>
                {'>>'}
            </A.PageButton>
        </A.Pagination>
    );
}

export default Pagination;