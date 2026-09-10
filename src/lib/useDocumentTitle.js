import { useEffect } from 'react'

// Sets the browser tab title for the current page. Call once at the top of a page component.
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
