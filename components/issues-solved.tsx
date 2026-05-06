import { CheckCircle } from "lucide-react";

const issues = [
  "Outdated fixtures and finishes",
  "Poor lighting and ventilation",
  "Limited storage space",
  "Water damage and leaks",
  "Accessibility concerns",
  "Energy inefficiency"
];

interface IssuesSolvedProps {
  title?: string;
  subtitle?: string;
  description?: string;
  issues?: Array<string | { problem: string; solution: string }>;
}

export default function IssuesSolved({
  title = "Issues We Solve",
  subtitle,
  description = "Our expert team addresses common bathroom problems with professional solutions.",
  issues: customIssues,
}: IssuesSolvedProps) {
  const issuesToRender = customIssues ?? issues;

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {issuesToRender.map((issue, index) => (
              <div
                key={typeof issue === "string" ? issue : issue.problem}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-foreground text-left">
                  {typeof issue === "string" ? issue : `${issue.problem} - ${issue.solution}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
