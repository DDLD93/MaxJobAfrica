# MaxJob Africa - Professional Membership Platform

## Project Overview
MaxJob Africa is a professional membership platform that connects job seekers with opportunities across Africa. The platform currently features a membership registration system, seminar registration, user/admin dashboards, with form validation, file upload capabilities, and a modern, responsive UI.

## Current Implementation Status

### Completed Features
1. **Frontend Implementation**
   - Modern, responsive UI using Tailwind CSS
   - Form validation for all fields
   - File upload handling for CVs (PDF, Word, Text)
   - Success modal for form submission
   - Professional form sections:
     - Personal Information
     - Professional Information
     - CV Upload
     - Terms and Conditions

2. **Form Fields**
   - Personal Information:
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Nationality
     - State of Origin
     - Residential Address
   - Professional Information:
     - Skill Category (with predefined options)
     - Years of Experience
     - Current Employer
     - Preferred Location
     - Expected Salary Range
   - CV Upload:
     - File type validation (PDF, Word, Text)
     - Size limit (5MB)
     - Drag and drop interface
   - Terms and Conditions acceptance

3. **Seminar Registration**
   - Registration form for professional development seminars
   - Seminar fee payment (₦20,000)
   - Payment confirmation
   - Seminar schedule viewing
   - Certificate generation after completion

4. **User Dashboard**
   - Profile management
   - Application tracking
   - Seminar registration status
   - Payment history
   - Document management
   - Job application history
   - Notification center

5. **Admin Dashboard**
   - User management
   - Application processing
   - Seminar management
   - Payment tracking
   - Report generation
   - Content management
   - Email campaign management

### Pending Implementation
1. **Backend Integration**
   - API endpoints for form submission
   - File storage system for CVs
   - Database schema and models
   - User authentication system
   - Email notification system

2. **Payment Integration**
   - Flutterwave payment gateway integration for membership and seminars
   - Payment status tracking
   - Membership activation after payment
   - Seminar access activation

3. **Additional Features**
   - Job application system
   - Email verification system
   - Seminar attendance tracking
   - Certificate generation system

## Technical Stack
- Frontend:
  - React.js
  - Next.js
  - Tailwind CSS
  - Form validation
  - File handling

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Backend Requirements

### API Endpoints Needed
1. **User Registration**
   - POST `/api/membership/register`
   - Handles form submission
   - Stores user data
   - Manages CV file upload

2. **Payment Processing**
   - POST `/api/payment/initialize`
   - Handles payment initialization for membership and seminars
   - Returns payment link

3. **Payment Verification**
   - POST `/api/payment/verify`
   - Verifies payment status
   - Updates user membership/seminar status

4. **Seminar Management**
   - POST `/api/seminars/register`
   - GET `/api/seminars/list`
   - POST `/api/seminars/attendance`

### Database Schema
Required tables:
1. Users
   - Personal information
   - Professional details
   - Membership status
   - Payment history

2. Files
   - CV storage
   - File metadata

3. Payments
   - Transaction details
   - Payment status
   - User reference

4. Seminars
   - Seminar details
   - Registrations
   - Attendance records
   - Certificates

### Security Considerations
1. Implement proper authentication
2. Secure file upload handling
3. Payment data security
4. Data encryption
5. Input sanitization

## Next Steps for Backend Development
1. Set up database and models
2. Implement API endpoints
3. Integrate file storage system
4. Set up payment gateway
5. Implement email notifications
6. Create admin dashboard
7. Add user authentication
8. Implement job application system
9. Set up seminar management system

## Contact
For any questions or clarifications, please contact the project manager.

## License
[Specify your license here] 