import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - X-Beat`;
        } else {
            document.title = 'Bloom-Beat | The Perfect Plant Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
