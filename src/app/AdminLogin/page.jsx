"use client";
import React, { useEffect, useRef, useState } from 'react'
import {
    Globe, Lock, Eye, EyeOff, Search, Download, Trash2, CheckCircle, Clock, Phone,
    Mail, Calendar, DollarSign, MapPin, Upload, Send, FileText, Plus, X,
} from 'lucide-react';
const page = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logding, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [remarkText, setRemarkText] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [enquiries, setEnquiries] = useState([]);


    const handelLogin = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(loginData);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/admin/login", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status) {
                    localStorage.setItem("token", result.token);
                    setIsLoggedIn(true)
                }else{
                    console.log(result.message);
                    
                    alert(result.message)
                }
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        const tokenData = localStorage.getItem('token');
        if (tokenData) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, []);

    const getDataFunction = () => {
        const token = localStorage.getItem("token");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if (token) {
            myHeaders.append("Authorization", `Bearer ${token}`);
        }

        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append("search", searchTerm);
        if (statusFilter) queryParams.append("status", statusFilter);
        if (startDate) queryParams.append("startDate", startDate);
        if (endDate) queryParams.append("endDate", endDate);
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries?${queryParams.toString()}`;
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.message === "Not authorized") {
                    localStorage.removeItem("token");
                }
                if (result.status === true) {
                    setEnquiries(result.data);
                }
            })
            .catch((error) => console.error(error));
    };



    useEffect(() => {
        getDataFunction()
    }, [searchTerm, statusFilter, startDate, endDate])

    const statusOptions = [
        { value: 'New', label: 'New', color: 'bg-gray-100 text-gray-800', icon: Plus },
        { value: 'Contacted', label: 'Contacted', color: 'bg-blue-100 text-blue-800', icon: Phone },
        { value: 'Itinerary Sent', label: 'Itinerary Sent', color: 'bg-purple-100 text-purple-800', icon: FileText },
        { value: 'Confirmed', label: 'Confirmed', color: 'bg-green-100 text-green-800', icon: CheckCircle },
        { value: 'Waitlist', label: 'Waitlist', color: 'bg-yellow-100 text-yellow-800', icon: Clock }
    ];

    const getStatusConfig = (status) => {
        return statusOptions.find(s => s.value === status) || statusOptions[0];
    };

    const getStatusBadge = (status) => {
        const config = getStatusConfig(status);
        const IconComponent = config.icon;

        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
                <IconComponent className="w-3 h-3 mr-1" />
                {config.label}
            </span>
        );
    };


    const deleteEnquiry = (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "delete",
            headers: myHeaders,
            redirect: "follow"
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/enquiries/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status) {
                    getDataFunction();
                }
            })
            .catch((error) => console.error(error));
    };

    const UpdateEnquiry = (id, bodydata) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = {
            "status": bodydata
        }
        const requestOptions = {
            method: "put",
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: "follow"
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/enquiries/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status) {
                    getDataFunction();
                }
            })
            .catch((error) => console.error(error));
    };


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setUploadedFile(file);
        } else {
            alert('Please upload only PDF files');
        }
    };

    const openEmailModal = (lead) => {
        setSelectedLead(lead);
        setEmailMessage(`Hi ${lead.name},\n\nPlease find attached your travel itinerary. We've carefully planned this trip based on your preferences.\n\nIf you have any questions, feel free to reach out!\n\nBest regards,\nWellocia Team`);
        setShowEmailModal(true);
    };

    const sendItinerary = () => {
        if (selectedLead && uploadedFile) {
            setLoading(true)
            const formdata = new FormData();
            formdata.append("file", uploadedFile);
            formdata.append("message", emailMessage);
            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiries/${selectedLead._id}/itinerary`,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        alert(result.message);
                    }
                })
                .catch((error) => console.error("Upload error:", error))
                .finally(() => {
                    getDataFunction();
                    setLoading(false);
                    setShowEmailModal(false);
                    setUploadedFile(null);
                    setEmailMessage('');
                    setSelectedLead(null);
                })

            // reset states

        } else {
            alert('Please upload a PDF file first');
        }
    };

    const exportToCSV = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiries/export/excel`, {
            method: "GET"
        })
            .then((res) => res.blob()) // resolve blob
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "enquiries.xlsx";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => console.error("Export error:", error));
    };



    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <Globe className="w-10 h-10 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">Wellocia Admin</h1>
                        <p className="text-gray-600">Lead Management System</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">email</label>
                            <input
                                type="text"
                                value={loginData.email}
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                                    placeholder="Enter password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handelLogin}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                            <Lock className="w-4 h-4 mr-2" />
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                    {statusOptions.map((status) => {
                        const count = enquiries.filter(e => e.status === status.value).length;
                        const IconComponent = status.icon;
                        return (
                            <div key={status.value} className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-gray-600">{status.label}</p>
                                        <p className="text-xl font-bold text-gray-800">{count}</p>
                                    </div>
                                    <IconComponent className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">All Status</option>
                                {statusOptions.map(status => (
                                    <option key={status.value} value={status.value}>{status.label}</option>
                                ))}
                            </select>
                            <div>
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Filter by date"
                                />
                            </div>
                            <div>
                                <label>End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Filter by date"
                                />
                            </div>
                            <button
                                onClick={exportToCSV}
                                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                <span>Export CSV</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {enquiries.map((enquiry, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <Mail className="w-3 h-3 mr-1" />
                                                    {enquiry.email}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <Phone className="w-3 h-3 mr-1" />
                                                    {enquiry.phone}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center text-sm">
                                                <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${enquiry.tripType === 'International'
                                                    ? 'bg-purple-100 text-purple-800'
                                                    : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {enquiry.tripType}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center text-sm font-medium text-gray-900">
                                                    <DollarSign className="w-3 h-3 mr-1" />
                                                    {enquiry.budget}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {enquiry.dates}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <select
                                                value={enquiry.status}
                                                onChange={(e) => UpdateEnquiry(enquiry._id, e.target.value)}
                                                className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
                                            >
                                                {statusOptions.map(status => (
                                                    <option key={status.value} value={status.value}>{status.label}</option>
                                                ))}
                                            </select>
                                            <div className="mt-1">
                                                {getStatusBadge(enquiry.status)}
                                            </div>

                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex flex-wrap gap-2">
                                                <button
                                                    onClick={() => openEmailModal(enquiry)}
                                                    className="text-green-600 hover:text-green-900 transition-colors p-1"
                                                    title="Send Itinerary"
                                                >
                                                    <Send className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteEnquiry(enquiry._id)}
                                                    className="text-red-600 hover:text-red-900 transition-colors p-1"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>


            {/* Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Send Itinerary</h3>
                            <button
                                onClick={() => {
                                    setShowEmailModal(false);
                                    setUploadedFile(null);
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            > <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-2">
                                    Sending to: <strong>{selectedLead?.email}</strong>
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload PDF Itinerary
                                </label>
                                <div className="flex items-center space-x-3">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    >
                                        <Upload className="w-4 h-4" />
                                        <span>Choose PDF</span>
                                    </button>
                                    {uploadedFile && (
                                        <span className="text-sm text-green-600 flex items-center">
                                            <FileText className="w-4 h-4 mr-1" />
                                            {uploadedFile.name}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Current Itinerary */}
                            {selectedLead?.itinerary && (
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800 font-medium">Current Itinerary:</p>
                                    <p className="text-sm text-blue-600">{selectedLead.itinerary.name}</p>
                                    <p className="text-xs text-blue-500">Uploaded: {selectedLead.itinerary.uploadDate}</p>
                                </div>
                            )}

                            {/* Email Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Message
                                </label>
                                <textarea
                                    value={emailMessage}
                                    onChange={(e) => setEmailMessage(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows="6"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => {
                                    setShowEmailModal(false);
                                    setUploadedFile(null);
                                }}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => sendItinerary()}
                                disabled={!uploadedFile && !selectedLead?.itinerary}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            >
                                <Send className="w-4 h-4" />
                                <span> {logding ? "Loading..." : "Send Itinerary"} </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default page