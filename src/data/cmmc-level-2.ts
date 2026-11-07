// src/data/cmmc-level-2.ts
//
// CMMC Level 2 = the 110 security requirements of NIST SP 800-171 Rev 2
// (32 CFR 170.14(c)(3)). Requirement text is verbatim from NIST SP 800-171r2
// (https://doi.org/10.6028/NIST.SP.800-171r2), extracted 2026-10-28.
//
// Point values and POA&M rules are from 32 CFR 170.24(c)(2) and 170.21(a)(2),
// read from eCFR on 2026-10-28. Tested in src/__tests__/cmmc-level-2.test.js.

export interface Family {
  code: string;
  name: string;
  nist: string; // NIST family number, e.g. "3.1"
}

export interface Requirement {
  id: string; // CMMC identifier, e.g. "AC.L2-3.1.1"
  nist: string; // NIST requirement number, e.g. "3.1.1"
  family: string; // family code
  text: string;
}

export const families: Family[] = [
  { code: "AC", name: "Access Control", nist: "3.1" },
  { code: "AT", name: "Awareness and Training", nist: "3.2" },
  { code: "AU", name: "Audit and Accountability", nist: "3.3" },
  { code: "CM", name: "Configuration Management", nist: "3.4" },
  { code: "IA", name: "Identification and Authentication", nist: "3.5" },
  { code: "IR", name: "Incident Response", nist: "3.6" },
  { code: "MA", name: "Maintenance", nist: "3.7" },
  { code: "MP", name: "Media Protection", nist: "3.8" },
  { code: "PS", name: "Personnel Security", nist: "3.9" },
  { code: "PE", name: "Physical Protection", nist: "3.10" },
  { code: "RA", name: "Risk Assessment", nist: "3.11" },
  { code: "CA", name: "Security Assessment", nist: "3.12" },
  { code: "SC", name: "System and Communications Protection", nist: "3.13" },
  { code: "SI", name: "System and Information Integrity", nist: "3.14" },
];

export const requirements: Requirement[] = [
  { id: "AC.L2-3.1.1", nist: "3.1.1", family: "AC", text: "Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems)." },
  { id: "AC.L2-3.1.2", nist: "3.1.2", family: "AC", text: "Limit system access to the types of transactions and functions that authorized users are permitted to execute." },
  { id: "AC.L2-3.1.3", nist: "3.1.3", family: "AC", text: "Control the flow of CUI in accordance with approved authorizations." },
  { id: "AC.L2-3.1.4", nist: "3.1.4", family: "AC", text: "Separate the duties of individuals to reduce the risk of malevolent activity without collusion." },
  { id: "AC.L2-3.1.5", nist: "3.1.5", family: "AC", text: "Employ the principle of least privilege, including for specific security functions and privileged accounts." },
  { id: "AC.L2-3.1.6", nist: "3.1.6", family: "AC", text: "Use non-privileged accounts or roles when accessing nonsecurity functions." },
  { id: "AC.L2-3.1.7", nist: "3.1.7", family: "AC", text: "Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs." },
  { id: "AC.L2-3.1.8", nist: "3.1.8", family: "AC", text: "Limit unsuccessful logon attempts." },
  { id: "AC.L2-3.1.9", nist: "3.1.9", family: "AC", text: "Provide privacy and security notices consistent with applicable CUI rules." },
  { id: "AC.L2-3.1.10", nist: "3.1.10", family: "AC", text: "Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity." },
  { id: "AC.L2-3.1.11", nist: "3.1.11", family: "AC", text: "Terminate (automatically) a user session after a defined condition." },
  { id: "AC.L2-3.1.12", nist: "3.1.12", family: "AC", text: "Monitor and control remote access sessions." },
  { id: "AC.L2-3.1.13", nist: "3.1.13", family: "AC", text: "Employ cryptographic mechanisms to protect the confidentiality of remote access sessions." },
  { id: "AC.L2-3.1.14", nist: "3.1.14", family: "AC", text: "Route remote access via managed access control points." },
  { id: "AC.L2-3.1.15", nist: "3.1.15", family: "AC", text: "Authorize remote execution of privileged commands and remote access to security-relevant information." },
  { id: "AC.L2-3.1.16", nist: "3.1.16", family: "AC", text: "Authorize wireless access prior to allowing such connections." },
  { id: "AC.L2-3.1.17", nist: "3.1.17", family: "AC", text: "Protect wireless access using authentication and encryption." },
  { id: "AC.L2-3.1.18", nist: "3.1.18", family: "AC", text: "Control connection of mobile devices." },
  { id: "AC.L2-3.1.19", nist: "3.1.19", family: "AC", text: "Encrypt CUI on mobile devices and mobile computing platforms." },
  { id: "AC.L2-3.1.20", nist: "3.1.20", family: "AC", text: "Verify and control/limit connections to and use of external systems." },
  { id: "AC.L2-3.1.21", nist: "3.1.21", family: "AC", text: "Limit use of portable storage devices on external systems." },
  { id: "AC.L2-3.1.22", nist: "3.1.22", family: "AC", text: "Control CUI posted or processed on publicly accessible systems." },
  { id: "AT.L2-3.2.1", nist: "3.2.1", family: "AT", text: "Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems." },
  { id: "AT.L2-3.2.2", nist: "3.2.2", family: "AT", text: "Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities." },
  { id: "AT.L2-3.2.3", nist: "3.2.3", family: "AT", text: "Provide security awareness training on recognizing and reporting potential indicators of insider threat." },
  { id: "AU.L2-3.3.1", nist: "3.3.1", family: "AU", text: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity." },
  { id: "AU.L2-3.3.2", nist: "3.3.2", family: "AU", text: "Ensure that the actions of individual system users can be uniquely traced to those users, so they can be held accountable for their actions." },
  { id: "AU.L2-3.3.3", nist: "3.3.3", family: "AU", text: "Review and update logged events." },
  { id: "AU.L2-3.3.4", nist: "3.3.4", family: "AU", text: "Alert in the event of an audit logging process failure." },
  { id: "AU.L2-3.3.5", nist: "3.3.5", family: "AU", text: "Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity." },
  { id: "AU.L2-3.3.6", nist: "3.3.6", family: "AU", text: "Provide audit record reduction and report generation to support on-demand analysis and reporting." },
  { id: "AU.L2-3.3.7", nist: "3.3.7", family: "AU", text: "Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records." },
  { id: "AU.L2-3.3.8", nist: "3.3.8", family: "AU", text: "Protect audit information and audit logging tools from unauthorized access, modification, and deletion." },
  { id: "AU.L2-3.3.9", nist: "3.3.9", family: "AU", text: "Limit management of audit logging functionality to a subset of privileged users." },
  { id: "CM.L2-3.4.1", nist: "3.4.1", family: "CM", text: "Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles." },
  { id: "CM.L2-3.4.2", nist: "3.4.2", family: "CM", text: "Establish and enforce security configuration settings for information technology products employed in organizational systems." },
  { id: "CM.L2-3.4.3", nist: "3.4.3", family: "CM", text: "Track, review, approve or disapprove, and log changes to organizational systems." },
  { id: "CM.L2-3.4.4", nist: "3.4.4", family: "CM", text: "Analyze the security impact of changes prior to implementation." },
  { id: "CM.L2-3.4.5", nist: "3.4.5", family: "CM", text: "Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems." },
  { id: "CM.L2-3.4.6", nist: "3.4.6", family: "CM", text: "Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities." },
  { id: "CM.L2-3.4.7", nist: "3.4.7", family: "CM", text: "Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services." },
  { id: "CM.L2-3.4.8", nist: "3.4.8", family: "CM", text: "Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software." },
  { id: "CM.L2-3.4.9", nist: "3.4.9", family: "CM", text: "Control and monitor user-installed software." },
  { id: "IA.L2-3.5.1", nist: "3.5.1", family: "IA", text: "Identify system users, processes acting on behalf of users, and devices." },
  { id: "IA.L2-3.5.2", nist: "3.5.2", family: "IA", text: "Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems." },
  { id: "IA.L2-3.5.3", nist: "3.5.3", family: "IA", text: "Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts." },
  { id: "IA.L2-3.5.4", nist: "3.5.4", family: "IA", text: "Employ replay-resistant authentication mechanisms for network access to privileged and non- privileged accounts." },
  { id: "IA.L2-3.5.5", nist: "3.5.5", family: "IA", text: "Prevent reuse of identifiers for a defined period." },
  { id: "IA.L2-3.5.6", nist: "3.5.6", family: "IA", text: "Disable identifiers after a defined period of inactivity." },
  { id: "IA.L2-3.5.7", nist: "3.5.7", family: "IA", text: "Enforce a minimum password complexity and change of characters when new passwords are created." },
  { id: "IA.L2-3.5.8", nist: "3.5.8", family: "IA", text: "Prohibit password reuse for a specified number of generations." },
  { id: "IA.L2-3.5.9", nist: "3.5.9", family: "IA", text: "Allow temporary password use for system logons with an immediate change to a permanent password." },
  { id: "IA.L2-3.5.10", nist: "3.5.10", family: "IA", text: "Store and transmit only cryptographically-protected passwords." },
  { id: "IA.L2-3.5.11", nist: "3.5.11", family: "IA", text: "Obscure feedback of authentication information." },
  { id: "IR.L2-3.6.1", nist: "3.6.1", family: "IR", text: "Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities." },
  { id: "IR.L2-3.6.2", nist: "3.6.2", family: "IR", text: "Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization." },
  { id: "IR.L2-3.6.3", nist: "3.6.3", family: "IR", text: "Test the organizational incident response capability." },
  { id: "MA.L2-3.7.1", nist: "3.7.1", family: "MA", text: "Perform maintenance on organizational systems." },
  { id: "MA.L2-3.7.2", nist: "3.7.2", family: "MA", text: "Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance." },
  { id: "MA.L2-3.7.3", nist: "3.7.3", family: "MA", text: "Ensure equipment removed for off-site maintenance is sanitized of any CUI." },
  { id: "MA.L2-3.7.4", nist: "3.7.4", family: "MA", text: "Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems." },
  { id: "MA.L2-3.7.5", nist: "3.7.5", family: "MA", text: "Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete." },
  { id: "MA.L2-3.7.6", nist: "3.7.6", family: "MA", text: "Supervise the maintenance activities of maintenance personnel without required access authorization." },
  { id: "MP.L2-3.8.1", nist: "3.8.1", family: "MP", text: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital." },
  { id: "MP.L2-3.8.2", nist: "3.8.2", family: "MP", text: "Limit access to CUI on system media to authorized users." },
  { id: "MP.L2-3.8.3", nist: "3.8.3", family: "MP", text: "Sanitize or destroy system media containing CUI before disposal or release for reuse." },
  { id: "MP.L2-3.8.4", nist: "3.8.4", family: "MP", text: "Mark media with necessary CUI markings and distribution limitations." },
  { id: "MP.L2-3.8.5", nist: "3.8.5", family: "MP", text: "Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas." },
  { id: "MP.L2-3.8.6", nist: "3.8.6", family: "MP", text: "Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards." },
  { id: "MP.L2-3.8.7", nist: "3.8.7", family: "MP", text: "Control the use of removable media on system components." },
  { id: "MP.L2-3.8.8", nist: "3.8.8", family: "MP", text: "Prohibit the use of portable storage devices when such devices have no identifiable owner." },
  { id: "MP.L2-3.8.9", nist: "3.8.9", family: "MP", text: "Protect the confidentiality of backup CUI at storage locations." },
  { id: "PS.L2-3.9.1", nist: "3.9.1", family: "PS", text: "Screen individuals prior to authorizing access to organizational systems containing CUI." },
  { id: "PS.L2-3.9.2", nist: "3.9.2", family: "PS", text: "Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers." },
  { id: "PE.L2-3.10.1", nist: "3.10.1", family: "PE", text: "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals." },
  { id: "PE.L2-3.10.2", nist: "3.10.2", family: "PE", text: "Protect and monitor the physical facility and support infrastructure for organizational systems." },
  { id: "PE.L2-3.10.3", nist: "3.10.3", family: "PE", text: "Escort visitors and monitor visitor activity." },
  { id: "PE.L2-3.10.4", nist: "3.10.4", family: "PE", text: "Maintain audit logs of physical access." },
  { id: "PE.L2-3.10.5", nist: "3.10.5", family: "PE", text: "Control and manage physical access devices." },
  { id: "PE.L2-3.10.6", nist: "3.10.6", family: "PE", text: "Enforce safeguarding measures for CUI at alternate work sites." },
  { id: "RA.L2-3.11.1", nist: "3.11.1", family: "RA", text: "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI." },
  { id: "RA.L2-3.11.2", nist: "3.11.2", family: "RA", text: "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified." },
  { id: "RA.L2-3.11.3", nist: "3.11.3", family: "RA", text: "Remediate vulnerabilities in accordance with risk assessments." },
  { id: "CA.L2-3.12.1", nist: "3.12.1", family: "CA", text: "Periodically assess the security controls in organizational systems to determine if the controls are effective in their application." },
  { id: "CA.L2-3.12.2", nist: "3.12.2", family: "CA", text: "Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems." },
  { id: "CA.L2-3.12.3", nist: "3.12.3", family: "CA", text: "Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls." },
  { id: "CA.L2-3.12.4", nist: "3.12.4", family: "CA", text: "Develop, document, and periodically update system security plans that describe system boundaries, system environments of operation, how security requirements are implemented, and the relationships with or connections to other systems." },
  { id: "SC.L2-3.13.1", nist: "3.13.1", family: "SC", text: "Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems." },
  { id: "SC.L2-3.13.2", nist: "3.13.2", family: "SC", text: "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems." },
  { id: "SC.L2-3.13.3", nist: "3.13.3", family: "SC", text: "Separate user functionality from system management functionality." },
  { id: "SC.L2-3.13.4", nist: "3.13.4", family: "SC", text: "Prevent unauthorized and unintended information transfer via shared system resources." },
  { id: "SC.L2-3.13.5", nist: "3.13.5", family: "SC", text: "Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks." },
  { id: "SC.L2-3.13.6", nist: "3.13.6", family: "SC", text: "Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception)." },
  { id: "SC.L2-3.13.7", nist: "3.13.7", family: "SC", text: "Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling)." },
  { id: "SC.L2-3.13.8", nist: "3.13.8", family: "SC", text: "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards." },
  { id: "SC.L2-3.13.9", nist: "3.13.9", family: "SC", text: "Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity." },
  { id: "SC.L2-3.13.10", nist: "3.13.10", family: "SC", text: "Establish and manage cryptographic keys for cryptography employed in organizational systems." },
  { id: "SC.L2-3.13.11", nist: "3.13.11", family: "SC", text: "Employ FIPS-validated cryptography when used to protect the confidentiality of CUI." },
  { id: "SC.L2-3.13.12", nist: "3.13.12", family: "SC", text: "Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device." },
  { id: "SC.L2-3.13.13", nist: "3.13.13", family: "SC", text: "Control and monitor the use of mobile code." },
  { id: "SC.L2-3.13.14", nist: "3.13.14", family: "SC", text: "Control and monitor the use of Voice over Internet Protocol (VoIP) technologies." },
  { id: "SC.L2-3.13.15", nist: "3.13.15", family: "SC", text: "Protect the authenticity of communications sessions." },
  { id: "SC.L2-3.13.16", nist: "3.13.16", family: "SC", text: "Protect the confidentiality of CUI at rest." },
  { id: "SI.L2-3.14.1", nist: "3.14.1", family: "SI", text: "Identify, report, and correct system flaws in a timely manner." },
  { id: "SI.L2-3.14.2", nist: "3.14.2", family: "SI", text: "Provide protection from malicious code at designated locations within organizational systems." },
  { id: "SI.L2-3.14.3", nist: "3.14.3", family: "SI", text: "Monitor system security alerts and advisories and take action in response." },
  { id: "SI.L2-3.14.4", nist: "3.14.4", family: "SI", text: "Update malicious code protection mechanisms when new releases are available." },
  { id: "SI.L2-3.14.5", nist: "3.14.5", family: "SI", text: "Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed." },
  { id: "SI.L2-3.14.6", nist: "3.14.6", family: "SI", text: "Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks." },
  { id: "SI.L2-3.14.7", nist: "3.14.7", family: "SI", text: "Identify unauthorized use of organizational systems." },
];

// 32 CFR 170.24(c)(2)(i)(B)(1): 5 points (basic + derived lists).
const FIVE_POINT = new Set([
  "AC.L2-3.1.1", "AC.L2-3.1.2", "AT.L2-3.2.1", "AT.L2-3.2.2", "AU.L2-3.3.1", "CM.L2-3.4.1", "CM.L2-3.4.2",
  "IA.L2-3.5.1", "IA.L2-3.5.2", "IR.L2-3.6.1", "IR.L2-3.6.2", "MA.L2-3.7.2", "MP.L2-3.8.3", "PS.L2-3.9.2",
  "PE.L2-3.10.1", "PE.L2-3.10.2", "CA.L2-3.12.1", "CA.L2-3.12.3", "SC.L2-3.13.1", "SC.L2-3.13.2",
  "SI.L2-3.14.1", "SI.L2-3.14.2", "SI.L2-3.14.3",
  "AC.L2-3.1.12", "AC.L2-3.1.13", "AC.L2-3.1.16", "AC.L2-3.1.17", "AC.L2-3.1.18", "AU.L2-3.3.5",
  "CM.L2-3.4.5", "CM.L2-3.4.6", "CM.L2-3.4.7", "CM.L2-3.4.8", "IA.L2-3.5.10", "MA.L2-3.7.5", "MP.L2-3.8.7",
  "RA.L2-3.11.2", "SC.L2-3.13.5", "SC.L2-3.13.6", "SC.L2-3.13.15", "SI.L2-3.14.4", "SI.L2-3.14.6",
]);

// 32 CFR 170.24(c)(2)(i)(B)(2): 3 points (basic + derived lists).
const THREE_POINT = new Set([
  "AU.L2-3.3.2", "MA.L2-3.7.1", "MP.L2-3.8.1", "MP.L2-3.8.2", "PS.L2-3.9.1", "RA.L2-3.11.1", "CA.L2-3.12.2",
  "AC.L2-3.1.5", "AC.L2-3.1.19", "MA.L2-3.7.4", "MP.L2-3.8.8", "SC.L2-3.13.8", "SI.L2-3.14.5", "SI.L2-3.14.7",
]);

// 32 CFR 170.24(c)(2)(i)(B)(4): partial credit possible (3 if partial, 5 if absent).
export const PARTIAL = new Set(["IA.L2-3.5.3", "SC.L2-3.13.11"]);

// 32 CFR 170.21(a)(2)(iii): never allowed on a POA&M, though none is worth more than 1 point.
export const POAM_EXCLUDED = new Set([
  "AC.L2-3.1.20", "AC.L2-3.1.22", "CA.L2-3.12.4", "PE.L2-3.10.3", "PE.L2-3.10.4", "PE.L2-3.10.5",
]);

// 32 CFR 170.24(c)(2)(i)(B)(5): without a current SSP the assessment can't be
// completed, so it is never scored NOT MET in a completed assessment. That's
// why the floor is -203, not the -204 the 1-point rule alone would give.
export const PREREQUISITE = "CA.L2-3.12.4";

/** Points subtracted when NOT MET (worst case for the two partial-credit requirements). */
export function points(id: string): 0 | 1 | 3 | 5 {
  if (id === PREREQUISITE) return 0;
  if (FIVE_POINT.has(id) || PARTIAL.has(id)) return 5;
  if (THREE_POINT.has(id)) return 3;
  return 1;
}

export type PoamStatus = "yes" | "no" | "partial";

/**
 * 32 CFR 170.21(a)(2)(ii)-(iii): only 1-point requirements outside the
 * excluded list; SC.L2-3.13.11 only when encryption is used but not
 * FIPS-validated (3 points).
 */
export function poam(id: string): PoamStatus {
  if (id === "SC.L2-3.13.11") return "partial";
  if (POAM_EXCLUDED.has(id)) return "no";
  return points(id) === 1 ? "yes" : "no";
}

export const MAX_SCORE = requirements.length;
export const MIN_SCORE = MAX_SCORE - requirements.reduce((sum, r) => sum + points(r.id), 0);
/** 32 CFR 170.21(a)(2)(i): score / 110 >= 0.8. */
export const CONDITIONAL_MIN_SCORE = Math.ceil(MAX_SCORE * 0.8);
