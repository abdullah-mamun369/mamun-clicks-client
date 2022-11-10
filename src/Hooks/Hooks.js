import { useEffect } from "react"

const useSiteTitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title])
};

export default useSiteTitle;