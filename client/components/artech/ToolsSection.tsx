import LogoLoop from './LogoLoop';
import { 
  SiPython, 
  SiR, 
  SiTableau, 
  SiGoogleanalytics, 
  SiJupyter,
  SiMysql
} from 'react-icons/si';
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  TrendingUp, 
  PieChart, 
  Activity 
} from 'lucide-react';

const dataTools = [
  { 
    node: <SiPython className="text-blue-500" size={48} />, 
    title: "Python", 
    href: "https://python.org" 
  },
  { 
    node: <SiR className="text-blue-600" size={48} />, 
    title: "R", 
    href: "https://r-project.org" 
  },
  { 
    node: <SiTableau className="text-orange-500" size={48} />, 
    title: "Tableau", 
    href: "https://tableau.com" 
  },
  { 
    node: <SiGoogleanalytics className="text-orange-400" size={48} />, 
    title: "Google Analytics", 
    href: "https://analytics.google.com" 
  },
  { 
    node: <SiJupyter className="text-orange-600" size={48} />, 
    title: "Jupyter Notebook", 
    href: "https://jupyter.org" 
  },
  { 
    node: <FileSpreadsheet className="text-green-600" size={48} />, 
    title: "Microsoft Excel", 
    href: "https://microsoft.com/excel" 
  },
  { 
    node: <BarChart3 className="text-yellow-500" size={48} />, 
    title: "Power BI", 
    href: "https://powerbi.microsoft.com" 
  },
  { 
    node: <SiMysql className="text-blue-700" size={48} />, 
    title: "MySQL", 
    href: "https://mysql.com" 
  },
  { 
    node: <BarChart3 className="text-green-500" size={48} />, 
    title: "RapidMiner", 
    href: "https://rapidminer.com" 
  },
  { 
    node: <PieChart className="text-orange-500" size={48} />, 
    title: "Orange", 
    href: "https://orangedatamining.com" 
  },
  { 
    node: <Activity className="text-purple-500" size={48} />, 
    title: "KNIME", 
    href: "https://knime.com" 
  },
  { 
    node: <TrendingUp className="text-red-500" size={48} />, 
    title: "Google Charts", 
    href: "https://developers.google.com/chart" 
  },
  { 
    node: <Database className="text-blue-400" size={48} />, 
    title: "Datawrapper", 
    href: "https://datawrapper.de" 
  },
  { 
    node: <FileSpreadsheet className="text-green-600" size={48} />, 
    title: "Qlik", 
    href: "https://qlik.com" 
  },
  { 
    node: <BarChart3 className="text-blue-800" size={48} />, 
    title: "SAS", 
    href: "https://sas.com" 
  },
  { 
    node: <TrendingUp className="text-orange-600" size={48} />, 
    title: "Spotfire", 
    href: "https://spotfire.tibco.com" 
  }
];

export default function ToolsSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Data Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with industry-leading tools and technologies to deliver powerful data solutions
          </p>
        </div>
        
        <div className="relative">
          <LogoLoop
            logos={dataTools}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--background))"
            ariaLabel="Data tools and technologies"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
}
