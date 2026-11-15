import { Badge } from "./ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const members = [
    {
        name: 'Shreya Kedia',
        role: 'Chief Technology Officer (CTO)',
        designation: 'Chief Technology Officer (CTO)',
        bio: 'Visionary technology leader overseeing innovation, strategic growth, and sustainable digital transformation across the organization.',
        primarySkill: 'Leadership & Innovation',
        skills: ['Strategic Planning', 'Decision Making', 'Innovation Management', 'Team Leadership']
    },
    {
        name: 'Vivek Sharma',
        role: 'Chief Financial Officer (CFO)',
        designation: 'Chief Financial Officer (CFO)',
        bio: 'Finance professional focused on financial planning, profitability optimization, cash flow management, and strategic business growth. Passionate about leveraging financial insights and data-driven intelligence to help businesses make informed decisions and achieve sustainable success.',
        primarySkill: 'Financial Strategy & Leadership',
        skills: ['Financial Planning', 'Strategic Decision Making', 'Cash Flow Management', 'Business Growth']
    },
    {
        name: 'Siddhart Gupta',
        role: 'Chief Data & Analtics Officer (CDAO)',
        designation: 'Chief Data & Analtics Officer (CDAO)',
        bio: "Leading IntelliSuite's data and analytics strategy by transforming complex business information into meaningful insights. Specializing in business intelligence, advanced analytics, and intelligent dashboards that enable better decisions and measurable business performance.",
        primarySkill: 'Data Intelligence & Analytics',
        skills: ['Business Intelligence', 'Data Analytics', 'Al & Automation', 'Decision Intelligence']
    },
    {
        name: 'Saurabh Singh',
        role: 'Chief Strategy Officer (CSO)',
        designation: 'Chief Strategy Officer (CSO)',
        bio: 'Driving business transformation through strategic consulting, operational excellence, and data-driven advisory. Focused on identifying growth opportunities, optimizing business processes, and helping organizations implement practical strategies for long-term profitability and success.',
        primarySkill: 'Business Consulting & Strategic Advisory',
        skills: ['Business Consulting', 'Strategic Planning', 'Process Optimization', 'Business Transformation']
    },
]


function TeamCard({ member }: { member: any }) {
    return (
        <Card className="w-full h-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex justify-center text-[20px] font-semibold text-foreground">{member.name}</CardTitle>
                <CardDescription className="flex justify-center">
                    <Badge className="text-[#3b82f6] text-md font-semibold" variant={"secondary"}>{member.designation}</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 flex-1 flex flex-col">
                <div className="flex justify-center">
                    <Badge className="flex justify-center text-secondary-foreground" variant='outline'>{member.primarySkill}</Badge>
                </div>
                <div className="flex justify-start tracking-tight">
                    <p className="text-[13px]/5 text-muted-foreground/95 font-medium">
                        {member.bio}
                    </p>
                </div>

                <div className="flex justify-start gap-2 mt-3 flex-wrap">
                    {member.skills.map((skill: string, index: number) => (
                        <Badge key={index} className="text-secondary-foreground" variant='secondary'>{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default function TeamSection() {
    return (
        <section className="py-12 md:py-25 ">

            <div className='mb-12 text-center sm:mb-16 lg:mb-24'>
                <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>Get to Know Our Amazing Team</h2>
                <p className='text-muted-foreground text-xl'>
                    Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
                </p>
            </div>

            <div className=" px-4 sm:px-8 md:px-12 lg:px-20 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
                {members.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>

        </section>
    )
}