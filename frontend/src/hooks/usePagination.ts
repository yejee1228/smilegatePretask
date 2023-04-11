import { IUserForList } from '@/types';
import { useState, useEffect } from 'react';

function usePagination(data: IUserForList[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [currentItems, setCurrentItems] = useState<IUserForList[]>([])

    useEffect(() => {
        if (data && data.length > 0) {
            setTotalPages(Math.ceil(data.length / itemsPerPage))
        }
    }, [data, itemsPerPage])

    useEffect(() => {
        if (data && data.length > 0 && currentPage > 0 && currentPage <= totalPages) {
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            setCurrentItems(data.slice(startIndex, endIndex))
        }
    }, [data, itemsPerPage, currentPage, totalPages])

    function goToPage(pageNumber: number) {
        setCurrentPage(Math.min(Math.max(1, pageNumber), totalPages))
    }

    return { currentPage, totalPages, currentItems, goToPage }
}

export default usePagination
