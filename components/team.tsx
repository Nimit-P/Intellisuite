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


function TeamCard({ member }: { member: typeof members[number] }) {
    return (
        <Card className="w-full h-full flex flex-col justify-between hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-semibold text-foreground text-center">
                    {member.name}
                </CardTitle>
                <CardDescription className="flex items-center justify-center min-h-[44px]">
                    <Badge className="text-[#3b82f6] text-xs sm:text-sm font-semibold text-center whitespace-normal leading-tight" variant="secondary">
                        {member.designation}
                    </Badge>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-2 gap-4">
                <div className="flex items-center justify-center min-h-[44px]">
                    <Badge className="text-secondary-foreground text-center whitespace-normal leading-tight" variant='outline'>
                        {member.primarySkill}
                    </Badge>
                </div>
                
                <div className="flex-1 flex flex-col justify-start">
                    <p className="text-[13px] leading-relaxed text-muted-foreground/95 font-medium">
                        {member.bio}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/40">
                    <div className="flex flex-wrap items-center justify-start gap-1.5 min-h-[60px] content-start">
                        {member.skills.map((skill: string, index: number) => (
                            <Badge key={index} className="text-secondary-foreground text-xs" variant='secondary'>
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function TeamSection() {
    return (
        <section className="py-12 md:py-24">
            <div className='mb-12 text-center sm:mb-16 lg:mb-20 px-4'>
                <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground'>
                    Get to Know Our Amazing Team
                </h2>
                <p className='text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto'>
                    Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {members.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
}