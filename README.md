# 🚀 Playwright Automation Learning Journey (TypeScript)

## 📌 Project Overview

This repository documents a hands-on learning journey in **Playwright with TypeScript**, focusing on building strong foundations in end-to-end test automation.

The project includes real-world automation scenarios such as:

- ✅ Web UI testing
- ✅ Locator strategies (CSS, XPath, Role-based)
- ✅ Dynamic elements handling
- ✅ Tables, dropdowns, alerts, frames
- ✅ Data-driven testing (DDT)
- ✅ API-like UI validations
- ✅ File-based test data (JSON, CSV, Excel)
- ✅ Playwright advanced concepts (hooks, annotations, tracing, screenshots)

This is a progressive learning repository, built step-by-step to simulate real QA automation workflows.

---

## 🎯 Learning Objectives

- ✨ Understand Playwright core architecture
- ✨ Master modern locator strategies
- ✨ Write clean, maintainable test automation code
- ✨ Handle dynamic web elements
- ✨ Work with different UI components
- ✨ Implement data-driven testing (DDT)
- ✨ Learn debugging & reporting tools
- ✨ Simulate real QA engineer workflows

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Playwright** | End-to-end testing framework |
| **TypeScript** | Type-safe test scripting |
| **Node.js** | Runtime environment |
| **CSV / JSON / XLSX** | Test data sources |
| **Git & GitHub** | Version control |

---

## � Key Features Covered

### 🎯 Locator Strategies

Master multiple ways to find and interact with elements:

```
✓ CSS Selectors        - Direct element selection using CSS syntax
✓ XPath               - Absolute, relative, and axes-based queries
✓ Role-based          - getByRole() - Accessibility-focused selection
✓ Text-based          - getByText() - Find elements by text content
✓ Label-based         - getByLabel() - Find form elements by labels
✓ Placeholder-based   - getByPlaceholder() - Find inputs by placeholder text
```

---

### 🎨 UI Components Automation

Handle real-world web components with confidence:

```
📝 Text Inputs          - Single and multi-line text entry
🔘 Radio Buttons        - Single-choice selections
☑️  Checkboxes          - Multi-choice selections
🔽 Dropdowns            - Single-select and multi-select dropdowns
⚠️  Alerts              - JavaScript alerts, confirm, and prompt dialogs
🎛️  Dynamic Buttons     - START/STOP and state-changing buttons
📊 Tables               - Static and dynamic table navigation
📄 Pagination Tables    - Table navigation across multiple pages
📅 Date Pickers        - jQuery and Bootstrap date picker interactions
```

---

### 🚀 Advanced Playwright Concepts

Leverage Playwright's powerful features for complex scenarios:

```
🖼️  Frames & iFrames          - Navigate and interact within nested frames
🌐 Browser Context            - Multiple independent browser contexts
📂 Popups & New Tabs          - Handle window and tab interactions
🔐 Authentication             - Login flows and session management
🔍 Tracing                    - Debug failed tests with execution traces
📸 Screenshots                - Full-page and element-level captures
🎥 Video Recording            - Record test execution for analysis
🔄 Test Retries & Flaky Tests - Automatic retry mechanisms for flaky tests
```

---

### 📊 Data Driven Testing (DDT)

Parameterize tests with multiple data sources:

```
📋 Arrays              - Basic parametrization with JavaScript arrays
📄 JSON Files          - Structured test data in JSON format
📊 CSV Files           - Comma-separated test data sources
📑 Excel (XLSX)        - Excel spreadsheet test data
```

**Key Test Files:**
- `ddt-login-csv18.spec.ts` - Data from CSV files
- `ddt-login-json18.spec.ts` - Data from JSON files
- `ddt-login-xlxs18.spec.ts` - Data from Excel files
- `ddtparametarization-csv-json18.spec.ts` - Multiple data sources combined

---

### 📋 Test Organization

Professional test structure and lifecycle management:

```
🏷️  Test Grouping
├─ test.describe()           - Group related tests together
└─ Nested describe blocks    - Organize hierarchically

🔧 Hooks (Setup & Teardown)
├─ beforeAll()               - Run once before all tests
├─ beforeEach()              - Run before each test
├─ afterEach()               - Run after each test
└─ afterAll()                - Run once after all tests

🎨 Test Annotations
├─ test.only()               - Run only this test
├─ test.skip()               - Skip this test
├─ test.fail()               - Mark as expected to fail
└─ test.slow()               - Mark as slow test
```

---

## 📁 Project Structure

```
PWTS/
├── tests/                          # All test specifications
│   ├── ddt-login-*.spec.ts        # Data-driven login tests (CSV, JSON, XLSX)
│   ├── dynamicelements*.spec.ts   # Dynamic element handling
│   ├── locators*.spec.ts          # All locator strategy tests
│   ├── tables*.spec.ts            # Table automation tests
│   ├── dropdowns*.spec.ts         # Dropdown interaction tests
│   ├── alerts*.spec.ts            # Alert dialog handling
│   ├── iframes*.spec.ts           # iFrame navigation
│   ├── hookstest*.spec.ts         # Test hooks (setup/teardown)
│   ├── annotations*.spec.ts       # Test annotations
│   ├── screenShotvideo*.spec.ts   # Screenshots and video capture
│   ├── traceviewer*.spec.ts       # Trace debugging
│   ├── paralleltesting*.spec.ts   # Parallel execution tests
│   └── ...                        # Other test suites
│
├── testdata/                       # External test data files
│   ├── data.csv                   # CSV format test data
│   ├── testdata.json              # JSON format test data
│   └── locators.csv               # Locator mappings
│
├── playwright-report/             # Generated HTML test reports
├── test-results/                  # Detailed test result artifacts
├── screenshots/                   # Screenshot captures
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript compiler settings
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites

- ✅ Node.js (v14 or higher)
- ✅ npm or yarn package manager
- ✅ Git installed
- ✅ Basic understanding of JavaScript/TypeScript

### Installation Steps

**Step 1: Clone the repository**
```bash
git clone <repository-url>
cd PWTS
```

**Step 2: Install dependencies**
```bash
npm install
```

**Step 3: Install Playwright browsers**
```bash
npx playwright install
```

---

## ▶️ How to Run This Project

### 1️⃣ Install Dependencies
```bash
npm install
```
Install all required Node.js packages and dependencies.

### 2️⃣ Install Playwright Browsers
```bash
npx playwright install
```
Download and install browser binaries (Chromium, Firefox, WebKit).

### 3️⃣ Run All Tests
```bash
npx playwright test
```
Executes all test files in the `tests/` directory across all configured browsers.

### 4️⃣ Run a Specific Test File
```bash
npx playwright test tests/ddt-login-csv18.spec.ts
```
Useful for testing individual features during development.

### 5️⃣ Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```
Displays the browser window while tests run - great for debugging and visualization.

### 6️⃣ Run Tests in Debug Mode
```bash
npx playwright test --debug
```
Opens Playwright Inspector for step-by-step debugging with breakpoints.

### 7️⃣ Run Tests on Specific Browser
```bash
npx playwright test --project=chromium    # Chrome/Edge
npx playwright test --project=firefox     # Firefox
npx playwright test --project=webkit      # Safari
```

### 8️⃣ Generate HTML Report
```bash
npx playwright show-report
```
Opens an interactive HTML report with test results, screenshots, and videos.

---

## 📊 Reporting & Debugging Features

### 📈 HTML Reports
```bash
npx playwright show-report
```
- ✅ Test pass/fail status
- ✅ Execution timeline
- ✅ Detailed test logs
- ✅ Screenshots and videos
- ✅ Browser context info

### 🔍 Trace Viewer
```bash
npx playwright show-trace playwright-report/trace/<trace-file>
```
- ✅ Step-by-step test execution
- ✅ DOM snapshots at each step
- ✅ Network requests
- ✅ Console messages
- ✅ Screenshots of page state

### 📸 Screenshots on Failure
- Automatically captured when tests fail
- Stored in `test-results/` directory
- Embedded in HTML reports

### 🎥 Video Recording
- Available for failed tests
- Located in test-results folder
- Useful for understanding test failures

### 🐛 Debug Mode
```bash
npx playwright test --debug
```
- Step through test execution line-by-line
- Inspect elements in browser
- Check variable values
- Pause at breakpoints

### 🛠️ Codegen Tool
```bash
npx playwright codegen https://example.com
```
- Auto-generate test code by interacting with the browser
- Great for learning and quickly creating tests

---

## 🧪 Test Categories & Files

| Category | Test Files | Purpose |
|----------|-----------|---------|
| **Locators** | `pwlocators2.spec.ts`, `csslocators5.spec.ts`, `xpathlocators3.spec.ts`, `xpathAxes4.spec.ts` | Master different locator strategies |
| **Dynamic Elements** | `dynamicelements3.spec.ts`, `dynamictable10.spec.ts` | Handle elements that change during test |
| **Data-Driven** | `ddt-login-*.spec.ts`, `ddtparametarization-csv-json18.spec.ts` | Parameterized testing with external data |
| **Dropdowns** | `singledropdown7.spec.ts`, `multidropdwon7.spec.ts`, `sorteddropdown7.spec.ts` | Dropdown automation scenarios |
| **Tables** | `staticTable9.spec.ts`, `paginationTable10.spec.ts` | Table navigation and data extraction |
| **Advanced** | `hookstest16.spec.ts`, `annotations16.spec.ts`, `screenShotvideo15.spec.ts`, `traceviewer15.spec.ts` | Professional test patterns |

---

## 💡 What I Learned

Through building this project, I gained hands-on experience in:

```
📚 Deep Understanding
├─ Playwright core architecture and lifecycle
├─ Modern locator strategies and best practices
├─ DOM manipulation and element interaction
├─ Async/await patterns in test automation
└─ TypeScript type safety in testing

🏗️ Architecture Skills
├─ Structuring scalable test frameworks
├─ Organizing tests logically
├─ Writing reusable test utilities
├─ Managing test data effectively
└─ Configuration management

🔧 Practical Automation
├─ Handling dynamic and unpredictable UI elements
├─ Working with tables, forms, and complex components
├─ Managing authentication and sessions
├─ Parallel test execution
└─ Visual regression testing

🐛 Debugging & Analysis
├─ Using Playwright DevTools
├─ Reading and analyzing trace files
├─ Interpreting test reports
├─ Identifying and fixing flaky tests
└─ Capturing visual artifacts

📊 Professional Practices
├─ Data-driven test design
├─ Test organization and naming conventions
├─ Error handling and assertions
├─ CI/CD integration concepts
└─ Documentation and reporting
```

---

## 📈 Future Improvements

🔄 **Planned Enhancements:**

```
✨ Page Object Model (POM)      - Implement POM pattern for better maintainability
✨ API Testing Integration      - Combine API and UI testing
✨ CI/CD Pipeline              - GitHub Actions for automated test runs
✨ Parallel Execution          - Optimize test execution speed
✨ Framework Modularization     - Extract reusable components
✨ Performance Testing         - Add performance metrics
✨ Cross-browser Testing       - Enhanced multi-browser support
✨ Custom Reporters           - Build domain-specific reporting
```

---

## 👨‍💻 Author

**Haseeb Ahmed**

📌 **Role:** QA Automation Engineer (Learning Phase)

🎯 **Focus Areas:**
- Playwright & TypeScript
- Test Automation Frameworks
- End-to-End Testing
- Quality Assurance Automation

💬 **Open to:** Feedback, suggestions, and collaboration on automation testing practices.

---

## ⭐ Final Note

This repository represents my continuous learning journey in **QA Automation Testing**.

It demonstrates:
- ✅ Practical skills in Playwright automation
- ✅ Real-world test scenarios and challenges
- ✅ Professional test organization and structure
- ✅ Evolving automation best practices
- ✅ Commitment to clean, maintainable code

**This project is a living document** — it grows and evolves as I learn new concepts and techniques in test automation.

---

## 📄 License

This project is created for **educational purposes**.

---

## 🙏 Acknowledgments

Special thanks to:
- The Playwright team for an amazing automation framework
- The testing community for continuous inspiration
- Everyone using this as a learning resource

---

**Happy Testing! 🎉**

*Last Updated: May 2026*
