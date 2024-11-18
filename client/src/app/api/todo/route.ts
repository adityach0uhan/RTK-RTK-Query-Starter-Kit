import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    return NextResponse.json({
        users: [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 28 },
            { name: 'Charlie', age: 32 },
            { name: 'David', age: 22 },
            { name: 'Eve', age: 29 },
            { name: 'Frank', age: 31 },
            { name: 'Grace', age: 27 },
            { name: 'Hank', age: 26 },
            { name: 'Ivy', age: 24 },
            { name: 'Jack', age: 33 }
        ]
    });
}
