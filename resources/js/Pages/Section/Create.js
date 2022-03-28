import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })

    const sendSection = (e) => {
        e.preventDefault()
        post('/sections')
    };


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bo'limlar</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="mb-4 flex justify-end">
                                <Link href="/sections" className="bg-indigo-700 text-white py-1 px-2 rounded">Ortga</Link>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Bo'limi</label>
                                {/* <input value={section} onChange={e => setSection(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required /> */}
                                <input value={data.name} onChange={e => setData('name', e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required />
                            </div>
                            <div className="mb-4">
                                <button type="button" onClick={sendSection} className="mr-2 rounded border border-transparent shadow-sm px-2 py-1 bg-red-600 text-base font-medium text-white">Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
