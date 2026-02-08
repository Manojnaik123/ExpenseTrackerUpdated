// 'use client';
import { auth } from '@/auth'
import LoginForm from '@/components/login-form'
import { redirect } from 'next/navigation';
import React from 'react';
import LoginPageClient from './login-pageclient';

const LoginPage = async () => {

  const session = await auth();

  if(session){
    redirect('/application');
  }

  return <LoginPageClient/>
}

export default LoginPage