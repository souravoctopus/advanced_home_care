import { useCallback, useEffect, useState } from 'react'

/**
 * Loads data from an async getter (see services/contentService.js) and
 * exposes loading / error / empty states for the UI.
 */
export function useAsyncData(loader) {
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let active = true
    loader()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: null, loading: false, error }))
    return () => {
      active = false
    }
  }, [loader, attempt])

  const retry = useCallback(() => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    setAttempt((n) => n + 1)
  }, [])

  return { ...state, isEmpty: !state.loading && !state.error && !state.data?.length, retry }
}
