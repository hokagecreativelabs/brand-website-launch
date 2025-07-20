'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function BootcampRegister() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    level: '',
    motivation: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^\+?[0-9\s\-()]{7,}$/, 'Invalid phone number')
      .required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    level: Yup.string().required('Select your experience level'),
    motivation: Yup.string()
      .min(10, 'Tell us more! Minimum 10 characters')
      .required('This field is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    toast.info('Submitting your registration...');
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
  
      const result = await response.json();
  
      if (response.status === 409) {
        toast.warn(result?.error || 'You already submitted!');
        return;
      }
  
      if (result.success) {
        toast.success('Registration sent successfully!');
        resetForm();
      } else {
        toast.error(result?.error || 'Failed to send registration. Please try again.');
      }
    } catch (err) {
      toast.error('Server error. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section className="bg-white min-h-screen py-16 px-2">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-[#A6D1E6]">
        <h1 className="text-2xl font-bold text-[#7F5283] mb-2 text-center">
          Register for the August 2025 Bootcamp
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Fill the form below to join Hokage Creative Labs Academy
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                name="phone"
                type="tel"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
              />
              <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <Field
                name="country"
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
              />
              <ErrorMessage name="country" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                Experience Level
              </label>
              <Field
                as="select"
                name="level"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-[#7F5283] focus:border-[#7F5283]"
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="familiar">Slightly Familiar</option>
                <option value="comfortable">Comfortable</option>
              </Field>
              <ErrorMessage name="level" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Motivation */}
            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                Why do you want to join?
              </label>
              <Field
                as="textarea"
                name="motivation"
                rows={4}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
              />
              <ErrorMessage name="motivation" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple hover:bg-white'
              } text-white hover:text-purple hover:border hover:border-2 font-semibold py-3 px-6 rounded-md transition`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
