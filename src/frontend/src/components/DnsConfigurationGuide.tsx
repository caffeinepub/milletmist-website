import { ExternalLink, CheckCircle2, Clock, Globe, Shield, Copy, Check } from 'lucide-react';
import { useCanisterId } from '@/hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const DnsConfigurationGuide = () => {
  const { data: canisterId, isLoading, isError } = useCanisterId();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const canisterUrl = canisterId ? `https://${canisterId}.ic0.app` : '';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (isLoading) {
    return (
      <section id="dns-guide" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !canisterId) {
    return (
      <section id="dns-guide" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert variant="destructive">
              <AlertDescription>
                Unable to retrieve canister ID. Please ensure your application is properly deployed.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dns-guide" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              DNS Configuration Guide
            </h2>
            <p className="text-lg text-foreground/70">
              Connect your custom domain (raavni.com) to your Internet Computer application
            </p>
          </div>

          {/* Canister URL Card */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Your Canister URL
              </CardTitle>
              <CardDescription>
                This is your deployed application's Internet Computer URL
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                <code className="flex-1 text-sm font-mono break-all">{canisterUrl}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(canisterUrl, 'url')}
                  className="shrink-0"
                >
                  {copiedField === 'url' ? (
                    <Check className="h-4 w-4 text-success" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Canister ID: <code className="font-mono">{canisterId}</code>
              </p>
            </CardContent>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="space-y-6">
            {/* Step 1: Cloudflare Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </span>
                  Set Up Cloudflare Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                  <li>
                    Sign up for a free account at{' '}
                    <a
                      href="https://cloudflare.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      cloudflare.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>Click "Add a Site" and enter your domain: <strong>raavni.com</strong></li>
                  <li>Select the Free plan and continue</li>
                  <li>
                    Cloudflare will scan your existing DNS records (this may take a few moments)
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Step 2: Update Nameservers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </span>
                  Update Nameservers at Your Registrar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Cloudflare will provide you with two nameservers (e.g., <code>ns1.cloudflare.com</code> and{' '}
                  <code>ns2.cloudflare.com</code>). You need to update these at your domain registrar.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                  <li>Log into your domain registrar (where you purchased raavni.com)</li>
                  <li>Find the DNS or Nameserver settings</li>
                  <li>Replace the existing nameservers with the ones provided by Cloudflare</li>
                  <li>Save the changes</li>
                </ol>
                <Alert>
                  <Clock className="h-4 w-4" />
                  <AlertDescription>
                    Nameserver changes can take 24-48 hours to propagate globally, though they often complete
                    within a few hours.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Step 3: Configure DNS Records */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </span>
                  Configure DNS CNAME Record
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Once your nameservers are updated and active in Cloudflare, configure the DNS record:
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
                    <span className="font-semibold text-sm">Type:</span>
                    <code className="text-sm">CNAME</code>
                    <div className="w-8"></div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
                    <span className="font-semibold text-sm">Name:</span>
                    <code className="text-sm">@</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard('@', 'name')}
                      className="h-8 w-8"
                    >
                      {copiedField === 'name' ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
                    <span className="font-semibold text-sm">Target:</span>
                    <code className="text-sm break-all">{canisterId}.ic0.app</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(`${canisterId}.ic0.app`, 'target')}
                      className="h-8 w-8"
                    >
                      {copiedField === 'target' ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
                    <span className="font-semibold text-sm">Proxy:</span>
                    <span className="text-sm">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Proxied (Orange Cloud)
                      </span>
                    </span>
                    <div className="w-8"></div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
                    <span className="font-semibold text-sm">TTL:</span>
                    <code className="text-sm">Auto</code>
                    <div className="w-8"></div>
                  </div>
                </div>
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> Make sure the "Proxied" status is enabled (orange cloud icon) in
                    Cloudflare. This enables SSL and CDN benefits.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Step 4: SSL Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </span>
                  Configure SSL/TLS Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  Cloudflare provides free SSL certificates automatically. Configure the SSL mode:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                  <li>In your Cloudflare dashboard, go to SSL/TLS settings</li>
                  <li>
                    Set the SSL/TLS encryption mode to <strong>"Full"</strong> or{' '}
                    <strong>"Full (strict)"</strong>
                  </li>
                  <li>Enable "Always Use HTTPS" (recommended)</li>
                  <li>Enable "Automatic HTTPS Rewrites" (recommended)</li>
                </ol>
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    SSL certificate provisioning typically takes 5-15 minutes after DNS changes propagate.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Step 5: Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    5
                  </span>
                  Verify Your Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">After DNS propagation completes:</p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                  <li>
                    Visit <strong>https://raavni.com</strong> in your browser
                  </li>
                  <li>Verify that your Raavni Agrobyte website loads correctly</li>
                  <li>Check that the SSL certificate is valid (look for the padlock icon in the address bar)</li>
                  <li>Test the site on multiple devices and browsers</li>
                </ol>
                <div className="flex items-start gap-3 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground/80">
                    <strong className="text-success">Success!</strong> Once your domain loads correctly, your
                    custom domain is fully configured. Your application remains hosted on the Internet Computer
                    - raavni.com simply points to it.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Notes */}
          <Card className="mt-8 border-muted">
            <CardHeader>
              <CardTitle className="text-lg">Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/70">
              <ul className="list-disc list-inside space-y-1">
                <li>DNS propagation can take 24-48 hours globally, though often completes within a few hours</li>
                <li>
                  Your application remains hosted on the Internet Computer - the custom domain just points to it
                </li>
                <li>This setup is manual and separate from Caffeine's automated deployment system</li>
                <li>
                  Cloudflare's free tier includes SSL certificates, DDoS protection, and global CDN automatically
                </li>
                <li>
                  Some Internet Computer features may require additional HTTP header configuration in Cloudflare
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DnsConfigurationGuide;
