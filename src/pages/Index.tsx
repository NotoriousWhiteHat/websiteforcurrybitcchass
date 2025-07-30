import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, ExternalLink, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import chillCityVibe from '@/assets/chill-city-vibe.gif';
import discordProfile from '@/assets/discord-profile.jpg';

const Index = () => {
  const { toast } = useToast();
  const [raindrops, setRaindrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [showDiscordCard, setShowDiscordCard] = useState(true);

  useEffect(() => {
    // Create softer rain effect
    const drops = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 1.2 + Math.random() * 0.8
    }));
    setRaindrops(drops);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied! ✨",
        description: `${text} copied to clipboard`,
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const games = [
    {
      title: "Dungeon Quest",
      visits: "2.2B+ visits",
      exploits: ["Duping", "Stat Manipulation", "Auto Complete"],
      url: "https://www.roblox.com/games/2414851778/Dungeon-Quest-RPG-Adventure"
    },
    {
      title: "SPTS Classic", 
      visits: "250M+ visits",
      exploits: ["Godmode", "Auto Training", "Currency Manipulation"],
      url: "https://www.roblox.com/games/2202352383/SPTS-Classic"
    },
    {
      title: "Arcane Conquest",
      visits: "7.0M+ visits", 
      exploits: ["Duping", "Auto Combat", "Invincibility"],
      url: "https://www.roblox.com/games/125503319883299/Arcane-Conquest"
    },
    {
      title: "MVSD",
      visits: "1.7B+ visits",
      exploits: ["Aimbot", "Autofarm"],
      url: "https://www.roblox.com/games/12550337193/Murderers-VS-Sheriffs-DUELS"
    },
    {
      title: "Murder Mystery 2",
      visits: "21.5B+ visits",
      exploits: ["Autofarm"],
      url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
    },
    {
      title: "Lootify",
      visits: "120M+ visits",
      exploits: ["Duping"],
      url: "https://www.roblox.com/games/122.4/Lootify"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Chill City Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${chillCityVibe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Soft Dark Overlay for Readability */}
      <div className="fixed inset-0 z-5 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-purple-900/60" />
      
      {/* Dreamy Overlay Effects */}
      <div className="fixed inset-0 z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(200_80%_60%_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(280_60%_65%_/_0.1),transparent_50%)]" />
      </div>

      {/* Soft Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {raindrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute w-0.5 h-6 bg-gradient-to-b from-primary/20 to-transparent rounded-full"
            style={{
              left: `${drop.left}%`,
              animation: `fall ${drop.duration}s linear infinite ${drop.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Discord Profile Card */}
      {showDiscordCard && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <Card className="discord-card w-80 animate-gentle-float">
            <CardContent className="p-0">
              <div className="relative">
                {/* Discord Header */}
                <div className="h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-t-lg relative">
                  <button 
                    onClick={() => setShowDiscordCard(false)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  >
                    <X className="w-4 h-4 text-white/70" />
                  </button>
                </div>
                
                {/* Profile Picture */}
                <div className="absolute top-8 left-4">
                  <div className="w-20 h-20 rounded-full border-4 border-background overflow-hidden">
                    <img 
                      src={discordProfile} 
                      alt="cur_ry Discord Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-background animate-soft-pulse" />
                </div>
                
                {/* Profile Info */}
                <div className="pt-12 pb-6 px-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-rajdhani font-bold text-foreground">cur_ry</h3>
                    <p className="text-sm text-muted-foreground font-rajdhani">Game Exploit Specialist</p>
                  </div>
                  
                  {/* Status */}
                  <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-rajdhani text-primary font-semibold">🎮 Currently Available</p>
                    <p className="text-xs text-muted-foreground mt-1">Ready for new exploit projects</p>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <Button 
                      onClick={() => copyToClipboard('cur_ry')}
                      className="chill-button w-full font-rajdhani font-semibold"
                      size="sm"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Username
                    </Button>
                    <p className="text-xs text-center text-muted-foreground font-rajdhani">
                      Available for anti-cheat & exploit work
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-12">
        {/* Navigation */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Button 
            onClick={() => scrollToSection('for-sale')}
            className="chill-button font-rajdhani font-semibold text-lg px-8 py-6 mb-4"
          >
            ✨ Exploits for Sale
          </Button>
          <p className="text-muted-foreground text-sm font-rajdhani">
            If you want a game exploited or need anti-cheat protection for your game, add me on Discord
          </p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up [animation-delay:0.2s]">
          <h1 className="text-8xl md:text-9xl font-orbitron font-black soft-text mb-6 animate-soft-glow">
            cur_ry
          </h1>
          <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Focused on creating and preventing exploits in games.<br />
            <span className="text-primary">Experienced in analyzing, bypassing, and securing game systems against cheating.</span>
          </p>
        </div>

        {/* Expertise Section */}
        <section className="mb-20 animate-fade-in-up [animation-delay:0.4s]">
          <h2 className="text-5xl font-orbitron font-bold soft-text text-center mb-12">
            Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Exploit Creation", "Game Vulnerability Prevention", "System Exploit Testing"].map((skill, index) => (
              <Card key={skill} className="glass-effect soft-glow group hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-rajdhani font-semibold text-primary group-hover:animate-soft-pulse">
                    {skill}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section className="mb-20 animate-fade-in-up [animation-delay:0.6s]">
          <h2 className="text-5xl font-orbitron font-bold soft-text text-center mb-12">
            Games Exploited
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card 
                key={game.title} 
                className="glass-effect soft-glow group cursor-pointer hover:scale-105 transition-all duration-500 animate-fade-in-up" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => window.open(game.url, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-orbitron font-bold text-primary group-hover:animate-soft-pulse">
                      {game.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-accent font-rajdhani font-semibold text-lg mb-6">
                    {game.visits}
                  </p>
                  <div>
                    <h4 className="text-lg font-rajdhani font-semibold text-primary mb-3">
                      Exploits
                    </h4>
                    <ul className="space-y-2">
                      {game.exploits.map((exploit) => (
                        <li key={exploit} className="text-muted-foreground font-rajdhani flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-soft-pulse" />
                          {exploit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 animate-fade-in-up [animation-delay:0.8s]">
          <Card className="glass-effect soft-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-4xl font-orbitron font-bold soft-text text-center mb-8">
                Contact Me
              </h2>
              <div className="space-y-6 font-rajdhani text-lg">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                  <span className="text-muted-foreground font-semibold">Discord:</span>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-bold">cur_ry</span>
                    <Button 
                      size="sm" 
                      onClick={() => copyToClipboard('cur_ry')}
                      className="chill-button text-sm px-4 py-2"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                  <span className="text-muted-foreground font-semibold">Status:</span>
                  <span className="text-primary font-bold flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-soft-pulse" />
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                  <span className="text-muted-foreground font-semibold">Response Time:</span>
                  <span className="text-primary font-bold">24 Hours</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                  <span className="text-muted-foreground font-semibold">Timezone:</span>
                  <span className="text-primary font-bold">EST</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Sale Section */}
        <section id="for-sale" className="animate-fade-in-up [animation-delay:1s]">
          <h2 className="text-5xl font-orbitron font-bold soft-text text-center mb-12">
            Exploits for Sale
          </h2>
          <div className="flex justify-center">
            <Card className="glass-effect soft-glow group cursor-pointer hover:scale-105 transition-all duration-500 max-w-md">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-orbitron font-bold text-primary group-hover:animate-soft-pulse">
                    Lootify Dupe
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-rajdhani font-semibold text-primary mb-3">
                    Video Preview:
                  </h4>
                  <button 
                    onClick={() => window.open('https://medal.tv/games/roblox/clips/kNhkJuyizEbhMPnpQ?invite=cr-MSxPckMsMTU4NzIwNTQ0', '_blank')}
                    className="text-accent hover:text-primary transition-colors font-rajdhani underline"
                  >
                    Watch on Medal ✨
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;