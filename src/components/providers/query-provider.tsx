'use client'

import { ChildrenProps } from '@/lib/types';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function QueryProvider({ children }: ChildrenProps) {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}