import { Play, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BorderBeam } from "./ui/border-beam"
import MessageDialog from "./MessageDialog"
import Link from "next/link"

export function CTA() {
  return (
    <div className="flex justify-center m-4 sm:m-6 md:m-10 lg:m-20 px-4">
      <Card className="relative max-w-4xl w-full overflow-hidden p-6 sm:p-8 md:p-10 lg:py-15">
        <CardHeader className="px-0 sm:px-2 space-y-2 sm:space-y-3">
          <CardTitle className="flex justify-center text-center text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight px-2">
            Your Data Deserves to Work as Hard as You Do.
          </CardTitle>
          <CardDescription className="flex justify-center text-center text-sm sm:text-base md:text-md lg:text-lg px-2 sm:px-4">
            Let's turn your chaos into clarity — with dashboards that just work.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 px-2">
            <MessageDialog
              title="Book a Business Health Check"
              description="Book a Business Health Check. We will show templates and onboarding steps."
              triggerText="Book a Business Health Check"
            />
            <Link href={"https://wa.me/message/Q2UVGWRJWAGNA1"}>
              <Button size="lg" variant={"outline"} className={`border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium cursor-pointer`}>
                Chat with Expert
              </Button>
            </Link>
          </div>
        </CardContent>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </Card>
    </div>
  )
}