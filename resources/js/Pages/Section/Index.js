import React, { Fragment, useRef, useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Index(props) {
    const [show, setShow] = useState(false);

    const testFunc = () => {
        console.log('ok');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function CreateFunc() {
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            ok
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                            <button type="button" onClick={testFunc} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Saqlash</button>
                            <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Ortga</button>
                        </div>
                    </div>
                </div>
            </div>
        )
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
                                <a href='#' onClick={handleShow} className="bg-indigo-700 text-white py-1 px-2 rounded">Qo'shish</a>
                            </div>
                            <table className="border-collapse border border-slate-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-300 py-1">ID</th>
                                        <th className="border border-slate-300 py-1">Nomi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.sections.map((item, index) => {
                                        return (
                                            <tr key={index} className="text-center">
                                                <td className="border border-slate-300 py-1">{item.id}</td>
                                                <td className="border border-slate-300 py-1">{item.name}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {show ? <CreateFunc /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
