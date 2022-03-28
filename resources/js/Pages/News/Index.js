import React from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Index(props) {

    const { delete: destroy, errors } = useForm({
        name: '',
    })

    const deleteNew = (id) => {
        if (confirm("O'chirishni hohlaysizmi") == true) {
            destroy(route('news.destroy', id))
        }
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
                                <Link href="/news/create" className="bg-green-700 text-white py-1 px-2 rounded">Qo'shish</Link>
                            </div>
                            <table className="border-collapse border border-slate-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-300 py-1">ID</th>
                                        <th className="border border-slate-300 py-1">Bo'limi</th>
                                        <th className="border border-slate-300 py-1">Nomi</th>
                                        <th className="border border-slate-300 py-1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.news.map((item, index) => {
                                        return (
                                            <tr key={index} className="text-center">
                                                <td className="border border-slate-300 py-1">{item.id}</td>
                                                <td className="border border-slate-300 py-1">{item.section.name}</td>
                                                <td className="border border-slate-300 py-1">
                                                    <Link href={"/news/show/" + item.id}>{item.title}</Link>
                                                </td>
                                                <td className="border border-slate-300 py-1 w-40">
                                                    <Link href={"/news/edit/" + item.id} className="bg-yellow-500 px-1 mr-2 text-sm rounded-md text-white">yangilash</Link>
                                                    <button onClick={() => deleteNew(item.id)} className="bg-red-500 px-1 text-sm rounded-md text-white">O'chirish</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
