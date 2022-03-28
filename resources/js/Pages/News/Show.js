import React from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Yangiliklar</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="mb-4 flex justify-end">
                                <Link href="/news" className="bg-indigo-700 text-white py-1 px-2 rounded">Ortga</Link>
                            </div>
                            <div>
                                <h1 className="text-2xl text-center mb-4">{props.new.title}</h1>
                                <div className="leading-8">
                                    {props.new.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
