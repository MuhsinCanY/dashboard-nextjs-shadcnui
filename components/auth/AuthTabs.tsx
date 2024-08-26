import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

export const AuthTabs = () => {
  return (
    <div>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
