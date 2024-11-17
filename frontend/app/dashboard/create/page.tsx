import CreateUserForm from '@/components/CreateUserForm';
import 'bulma/css/bulma.min.css';
import { Suspense } from 'react';
import Loading from './loading';

export default function Create(){
  return (
    <Suspense fallback={<Loading />}>
      <CreateUserForm />
    </Suspense>
  );
}