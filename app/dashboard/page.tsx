import { redirect } from 'next/navigation'

const Dashboard: React.FC = () => {
  redirect('/dashboard/home')
  return <>Dashboard</>
}

export default Dashboard
