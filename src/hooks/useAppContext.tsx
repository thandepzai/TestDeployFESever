import { useContext } from 'react'
import { LoadingContext } from '../contexts/LoadingContext'
import { ThemeContext } from '../contexts/ThemeContext'

export const useLoading = () => {
	const { isLoading, setIsLoading } = useContext(LoadingContext)
	return { isLoading, setIsLoading }
}

export const useTheme = () => {
	const { theme, changeTheme } = useContext(ThemeContext)
	return { theme, changeTheme }
}
