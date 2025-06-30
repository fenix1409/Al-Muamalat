"use client";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/new-logo.png'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { instance } from '@/components/hooks/instance';
import { toast } from 'react-toastify';

export default function SignIn() {
    const router = useRouter();
    const { t } = useTranslation();
    const [form, setForm] = useState({ phoneNumber: '', password: '', full_name: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const loginMutation = useMutation({
        mutationFn: (credentials: { phoneNumber: string; password: string, full_name: string }) => {
            const formData = new FormData();
            formData.append('phoneNumber', credentials.phoneNumber);
            formData.append('password', credentials.password);
            formData.append('full_name', credentials.full_name);
            return instance().post('/auth/signup', formData);
        },
        onSuccess: (res) => {
            const token = res.data?.token;
            if (token) {
                localStorage.setItem('token', JSON.stringify(token));
            }
            toast.success(t('Successfully logged in'));
            router.push('/');
            console.log(res.data);
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || t('Foydalanuvchi nomi yoki parol noto‘g‘ri'));
            setIsLoading(false);
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        loginMutation.mutate(form);
    };

    return (
        <div className='bg-[#f2f2f2] min-h-screen'>
            <button className='w-[120px] p-[10px] top-[20px] relative rounded-[8px] bg-[#fe5d37] text-[15px] leading-[100%] font-semibold text-white inline-block cursor-pointer left-[80%]' onClick={() => router.push('/sign-in')}>
                {t('Kirish')}
            </button>
            <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <Link href={'/'} className="flex justify-center mb-6">
                        <Image src={Logo} alt='logo' width={410} height={100} priority style={{ width: "410px", height: "100px", objectFit: "cover" }} />
                    </Link>
                    <form onSubmit={submitForm} className="space-y-5">
                        <h1 className='text-[#fe6d4b] text-[40px] text-center leading-[100%] font-bold flex justify-center'>
                            {t('Register')}
                        </h1>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('Sizning ismingiz va familiyangiz')}
                            </label>
                            <input required type="text" id="full_name" name="full_name" value={form.full_name} onChange={handleChange} className="focus:outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#fe6d4b] focus:border-[#fe6d4b]" placeholder={t('Ism va familya')} />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('Sizning raqamingiz')}
                            </label>
                            <input required type="text" id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className="focus:outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#fe6d4b] focus:border-[#fe6d4b]" placeholder={t('Telefon raqam')} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('Parol')}
                            </label>
                            <div className="relative">
                                <input required type={showPassword ? "text" : "password"} id="password" name="password" value={form.password} onChange={handleChange} className="focus:outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#fe6d4b] focus:border-[#fe6d4b]" placeholder={t('Parol')} />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" onClick={() => setShowPassword((v) => !v)} tabIndex={-1}>
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>
                        <button type="submit" disabled={isLoading} className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fe6d4b] hover:bg-[#fe5d37] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                            {isLoading ? t('Loading...') : t('Yuborish')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}