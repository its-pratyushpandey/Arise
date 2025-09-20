import { validateEnvironment, getSetupInstructions } from "@/lib/env-validation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export default function EnvironmentCheck() {
  const validation = validateEnvironment();
  const instructions = getSetupInstructions();

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Environment Configuration</h1>
          <p className="text-muted-foreground mt-2">
            Your app needs to be configured before it can work properly
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {validation.isValid ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              )}
              Environment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant={validation.isValid ? "default" : "destructive"}>
                  {validation.isValid ? "Ready" : "Needs Configuration"}
                </Badge>
                <span className="text-sm">{validation.getMessage()}</span>
              </div>

              {(validation.missing.length > 0 || validation.placeholder.length > 0) && (
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Setup Instructions:</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5">1</span>
                      <div>
                        <strong>Database (Neon PostgreSQL)</strong>
                        <p className="text-muted-foreground mt-1">{instructions.database}</p>
                        <a 
                          href="https://neon.tech" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-500 hover:underline mt-1"
                        >
                          Visit Neon <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5">2</span>
                      <div>
                        <strong>Authentication (Clerk)</strong>
                        <p className="text-muted-foreground mt-1">{instructions.clerk}</p>
                        <a 
                          href="https://clerk.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-500 hover:underline mt-1"
                        >
                          Visit Clerk <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5">3</span>
                      <div>
                        <strong>AI Features (Google Gemini)</strong>
                        <p className="text-muted-foreground mt-1">{instructions.gemini}</p>
                        <a 
                          href="https://aistudio.google.com/app/apikey" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-500 hover:underline mt-1"
                        >
                          Visit Google AI Studio <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5">4</span>
                      <div>
                        <strong>Update Configuration</strong>
                        <p className="text-muted-foreground mt-1">{instructions.config}</p>
                        <code className="bg-muted-foreground/20 px-2 py-1 rounded text-xs mt-1 block">
                          Update: .env.local
                        </code>
                      </div>
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {validation.isValid && (
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">🎉 Ready to Go!</CardTitle>
              <CardDescription>
                Your environment is properly configured. You can now use all features of Arise.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a 
                  href="/dashboard" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Go to Dashboard
                </a>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
