import { teamMembers } from "../constants";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Ourteam = () => {
  return (
    <div className="mt-5">
      <section id="team" className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mt-1">
              Our Team
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-55">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.linkedin && ( // Conditionally render if LinkedIn link exists
                      <a
                        href={member.linkedin}
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security best practice for target="_blank"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.twitter && ( // Conditionally render if Twitter link exists
                      <a
                        href={member.twitter}
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security best practice for target="_blank"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email || 'default@example.com'}`} // Assuming you might add an email property later
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourteam;