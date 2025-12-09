# Graphic Charter

The following graphic charter defines the visual identity, design principles, and interface guidelines used in the TeamFlow frontend.  
It ensures consistency across all pages of the application and supports a clear, modern, and functional user experience.

## Color Palette

TeamFlow uses a color palette inspired by the React ecosystem and modern SaaS dashboards.

### Primary Colors

| Purpose | Color Name | Hex Value |
|---------|------------|-----------|
| Primary | React Blue | `#61DAFB` |
| Primary Dark | Deep Navy | `#0B253A` |
| Accent | Indigo | `#4F46E5` |

### Status Colors

| Status | Color Name | Hex Value |
|--------|------------|-----------|
| Success | Green | `#22C55E` |
| Warning | Yellow | `#FACC15` |
| Danger | Red | `#EF4444` |

### Neutral Colors

| Usage | Color Name | Hex Value |
|--------|------------|-----------|
| Background | Light Gray | `#F9FAFB` |
| Card / Panel | White | `#FFFFFF` |
| Border | Gray | `#E5E7EB` |
| Text Primary | Dark Gray | `#111827` |
| Text Secondary | Muted Gray | `#6B7280` |

## Typography

TeamFlow uses the Inter font family for all text elements.

### Font Weights Used

- 400 Regular — default text
- 500 Medium — labels and secondary UI elements
- 600 Semibold — section titles
- 700 Bold — primary headings

### Fallback Stack

system-ui, -apple-system, Segoe UI, Roboto


## UI Components Guidelines

### Buttons

Primary Button:
- Background color: `#61DAFB`
- Text color: black
- Rounded corners
- Slightly darker shade on hover
- Light shadow for elevation

Secondary Button:
- Light gray background
- Darker gray on hover

### Cards

- White background
- Rounded corners
- Subtle shadow
- Internal padding
- Structured spacing for clarity

### Inputs and Forms

- Gray border (`#E5E7EB`)
- Rounded corners
- Blue focus ring using `#61DAFB`
- Clean layout to ensure readability

## Layout Structure

### Sidebar Navigation

- Background: `#0B253A`
- Text and icons: white
- Active item highlighted with React Blue

Menu items:
- Dashboard
- Tasks
- Users
- Messages
- Settings

### Topbar

- White background
- Subtle shadow
- Displays user avatar and notification icon

## Page Visual Guidelines

### Login Page

- Centered layout
- White card on a light gray background
- Primary action button in React Blue
- Minimal interface

### Dashboard

- Grid of statistic cards
- Simple bar or donut charts
- Clear spacing and alignment
- Modern dashboard layout

### Taskboard

Kanban layout with three columns:
- To Do
- In Progress
- Done

Task cards include:
- Status color indicator
- Title and description
- Assigned user avatar
- Edit actions

### Messages Page

- Conversation layout
- Blue message bubbles for authenticated user
- Gray message bubbles for other users
- Input bar fixed at the bottom

### Users Page

- List or grid of user cards
- Displays name, email, and role
- Provides actions for editing user information


