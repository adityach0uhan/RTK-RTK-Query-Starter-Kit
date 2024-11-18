'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '@/provider/redux/slices/userSlice'; // Import your setUser action
import { useGetAllTodosQuery } from '../provider/redux/queries/feature'; // Assuming you have a query hook

export default function Home() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetAllTodosQuery({}); // Fetch data from the API

    // Dispatch the action only once after the data is loaded
    useEffect(() => {
        if (data && data.users) {
            dispatch(setUser(data.users)); // Dispatch users to Redux store
        }
    }, [data, dispatch]); // Only dispatch when data changes

    // Get the users from the Redux store
    const datas = useSelector((state: any) => state.user.user || []); // Default to empty array if undefined

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            {isLoading ? (
                <div className='w-screen text-4xl h-96 my-auto bg-blue-200 flex items-center justify-center'>
                    Loading...
                </div>
            ) : (
                <div className='w-screen text-lg p-1 h-96 m-auto bg-blue-200 flex items-center justify-center'>
                    <div className='flex flex-wrap gap-3'>
                        {datas.length > 0 ? (
                            datas.map((user: any, index: number) => (
                                <div
                                    className='border-2 border-black p-1 rounded-lg'
                                    key={index}>
                                    {user.name} - {user.age} years old
                                </div>
                            ))
                        ) : (
                            <div>No users found</div>
                        )}
                    </div>
                </div>
            )}
            {error && <div className='text-xl'>Error loading data</div>}
        </div>
    );
}
