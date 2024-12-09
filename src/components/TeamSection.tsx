import { Github, Linkedin, ExternalLink } from 'lucide-react';

const TeamSection = () => {
  return (
    <div id="team" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(129,140,248,0.1)_20%,transparent_40%),linear-gradient(to_bottom,transparent_0%,rgba(192,132,252,0.1)_20%,transparent_40%)] dark:opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The minds behind Hash Explorer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-shadow duration-200 group-hover:shadow-lg">
                <div className="absolute right-8 top-8 flex space-x-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {member.role}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <ExternalLink className="w-4 h-4" />
                    <span>{member.expertise}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: 'Usman Ashraf',
    role: 'Lead Developer',
    bio: 'Passionate about cryptography and secure systems development',
    expertise: 'Cryptographic Systems & Full-Stack Development',
    image: '/usman.jpg',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Tehreem Bakhsh',
    role: 'Security Researcher',
    bio: 'Specializing in cryptographic algorithm analysis and implementation',
    expertise: 'Cryptography Research & Security Analysis',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export default TeamSection;