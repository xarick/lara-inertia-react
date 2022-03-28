import React from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {

    const { data, setData, post, processing, errors } = useForm({
        section_id: '',
        title: '',
        body: '',
    })

    const sendData = (e) => {
        e.preventDefault()
        post('/news')
    };

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
                            <div className="mb-4">
                                <label className="block mb-2">Bo'lim nomi</label>
                                <select value={data.section_id} onChange={e => setData('section_id', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2">
                                    <option value="">Bo'limni tanlang</option>
                                    {props.sections.map((item, index) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Yangilik nomi</label>
                                <input value={data.title} onChange={e => setData('title', e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Yangilik matni</label>
                                <textarea value={data.body} onChange={e => setData('body', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2 h-60"></textarea>
                            </div>
                            <div className="mb-4">
                                <button type="button" onClick={sendData} className="mr-2 rounded border border-transparent shadow-sm px-2 py-1 bg-green-600 text-base font-medium text-white">Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
