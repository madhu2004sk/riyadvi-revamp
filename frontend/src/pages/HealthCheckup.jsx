import { useState } from "react";
import Section from "../components/Section";
import api from "../services/api";
const steps = [
    "Business Information",
    "Current Technology",
    "Business Challenges",
    "Goals",
    "Contact Information",
    "Submit",
];
export default function HealthCheckup() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        businessName: "",
        industry: "",
        currentTechnology: "",
        businessChallenges: "",
        goals: "",
        name: "",
        email: "",
        phone: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    function updateField(field, value) {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));
    }
    function nextStep() {
        if (step < steps.length - 1) {
            setStep((current) => current + 1);
        }
    }
    function previousStep() {
        if (step > 0) {
            setStep((current) => current - 1);
        }
    }
    async function submitHealthCheckup() {
        try {
            setLoading(true);
            setSuccess("");
            setError("");
            const response = await api.post(
                "/health-checkup",
                formData
            );
            setSuccess(response.data.message);
            setSubmitted(true);
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Unable to submit health checkup."
            );
        } finally {
            setLoading(false);
        }
    }
    if (submitted) {
        return (
            <main className="min-h-screen bg-[#050505] pt-28">
                <Section>
                    <div className="mx-auto max-w-2xl rounded-3xl border border-[#d4af37]/30 p-10
text-center">
                        <div className="text-4xl text-[#d4af37]">
                            ✓
                        </div>
                        <h1 className="mt-5 text-4xl font-bold">
                            Health Checkup Submitted
                        </h1>
                        <p className="mt-4 leading-7 text-gray-400">
                            {success ||
                                "Thank you for sharing your business information."}
                        </p>
                    </div>
                </Section>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-[#050505] pt-28">
            <Section>
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                            Business Health Checkup
                        </p>
                        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
                            Understand your digital health.
                        </h1>
                        <p className="mt-5 text-gray-400">
                            Answer a few questions to help identify technology
                            and digital opportunities.
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="mb-8 flex gap-2">
                            {steps.map((item, index) => (
                                <div
                                    key={item}
                                    className={`h-1 flex-1 rounded-full ${index <= step
                                            ? "bg-[#d4af37]"
                                            : "bg-white/10"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="rounded-3xl border border-white/10 p-7 sm:p-10">
                            <p className="text-sm text-gray-500">
                                Step {step + 1} of {steps.length}
                            </p>
                            <h2 className="mt-2 text-2xl font-bold">
                                {steps[step]}
                            </h2>
                            <div className="mt-8">
                                {/* STEP 1 */}
                                {step === 0 && (
                                    <div className="space-y-4">
                                        <input
                                            value={formData.businessName}
                                            onChange={(e) =>
                                                updateField(
                                                    "businessName",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Business Name"
                                            className="health-input"
                                        />
                                        <input
                                            value={formData.industry}
                                            onChange={(e) =>
                                                updateField(
                                                    "industry",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Industry"
                                            className="health-input"
                                        />
                                    </div>
                                )}
                                {/* STEP 2 */}
                                {step === 1 && (
                                    <textarea
                                        value={formData.currentTechnology}
                                        onChange={(e) =>
                                            updateField(
                                                "currentTechnology",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Tell us about your current technology stack..."
                                        rows="7"
                                        className="health-input"
                                    />
                                )}
                                {/* STEP 3 */}
                                {step === 2 && (
                                    <textarea
                                        value={formData.businessChallenges}
                                        onChange={(e) =>
                                            updateField(
                                                "businessChallenges",
                                                e.target.value
                                            )
                                        }
                                        placeholder="What are your biggest technology or business challenges?"
                                        rows="7"
                                        className="health-input"
                                    />
                                )}
                                {/* STEP 4 */}
                                {step === 3 && (
                                    <textarea
                                        value={formData.goals}
                                        onChange={(e) =>
                                            updateField(
                                                "goals",
                                                e.target.value
                                            )
                                        }
                                        placeholder="What would you like to achieve?"
                                        rows="7"
                                        className="health-input"
                                    />
                                )}
                                {/* STEP 5 */}
                                {step === 4 && (
                                    <div className="space-y-4">
                                        <input
                                            value={formData.name}
                                            onChange={(e) =>
                                                updateField(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Your Name"
                                            className="health-input"
                                        />
                                        <input
                                            value={formData.email}
                                            onChange={(e) =>
                                                updateField(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            type="email"
                                            placeholder="Email"
                                            className="health-input"
                                        />
                                        <input
                                            value={formData.phone}
                                            onChange={(e) =>
                                                updateField(
                                                    "phone",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Phone"
                                            className="health-input"
                                        />
                                    </div>
                                )}
                                {/* STEP 6 */}
                                {step === 5 && (
                                    <div className="rounded-2xl border border-white/10 p-6">
                                        <h3 className="text-xl font-semibold">
                                            Ready to submit?
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-400">
                                            Review your information and submit your
                                            Business Health Checkup.
                                        </p>
                                        {error && (
                                            <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4
text-sm text-red-400">
                                                {error}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="mt-8 flex justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={previousStep}
                                    disabled={step === 0 || loading}
                                    className="rounded-full border border-white/10 px-6 py-3 text-sm
disabled:opacity-30"
                                >
                                    Back
                                </button>
                                {step < steps.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold
text-black"
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={submitHealthCheckup}
                                        disabled={loading}
                                        className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold
text-black disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {loading
                                            ? "Submitting..."
                                            : "Submit Checkup"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}