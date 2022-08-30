import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';

const MainProvider = (props) => {
    const { children } = props;
    const [queryClient] = useState(new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default MainProvider