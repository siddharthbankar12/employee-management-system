const employeesLocal = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Fix login issue",
        description: "Resolve the login bug in the authentication module.",
        date: "2025-03-27",
        category: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update UI components",
        description: "Redesign the navbar and footer for a better UX.",
        date: "2025-03-26",
        category: "UI Enhancement",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Database Optimization",
        description: "Improve query performance for large datasets.",
        date: "2025-03-28",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "API Documentation",
        description: "Write detailed API documentation for new features.",
        date: "2025-03-25",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        description: "Conduct a security review for vulnerabilities.",
        date: "2025-03-29",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review PRs submitted by junior developers.",
        date: "2025-03-26",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Unit Tests",
        description: "Increase code coverage by adding more unit tests.",
        date: "2025-03-28",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize Frontend",
        description: "Reduce bundle size for faster page loads.",
        date: "2025-03-30",
        category: "Performance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix CSS Issues",
        description: "Resolve layout bugs in mobile views.",
        date: "2025-03-27",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy New Version",
        description: "Push latest changes to production server.",
        date: "2025-03-28",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Refactor Codebase",
        description: "Improve code readability and maintainability.",
        date: "2025-03-29",
        category: "Refactoring",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix API Response Time",
        description: "Optimize backend queries for faster responses.",
        date: "2025-03-27",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design New Feature",
        description: "Prototype and discuss new feature additions.",
        date: "2025-03-28",
        category: "Feature Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Automate Deployment",
        description: "Implement CI/CD pipeline for automatic deployment.",
        date: "2025-03-30",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const adminLocal = [
  {
    id: 1,
    adminName: "Mr. LOKI",
    email: "admin@me.com",
    password: "123",
  },
  {
    id: 2,
    adminName: "Mr. STARK",
    email: "admin1@me.com",
    password: "123",
  },
];

const updateTaskCounts = (data) => {
  return data.map((employeesData) => {
    const taskCount = {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    };

    employeesData.tasks.forEach((task) => {
      if (task.active) taskCount.active++;
      if (task.newTask) taskCount.newTask++;
      if (task.completed) taskCount.completed++;
      if (task.failed) taskCount.failed++;
    });

    return { ...employeesData, taskCount };
  });
};

export const setLocalStorage = (employees, admin) => {
  const updatedEmployees = updateTaskCounts(employees || employeesLocal);

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  localStorage.setItem("admin", JSON.stringify(admin || adminLocal));
};

export const getLocalStorage = () => {
  const employeesList = JSON.parse(localStorage.getItem("employees"));
  const adminList = JSON.parse(localStorage.getItem("admin"));

  return { employeesList, adminList };
};

export const updatedUserLocalStorage = (employees) => {
  if (employees.data.tasks) {
    const updateTaskCounts = (data) => {
      const taskCount = {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      };

      data.tasks.forEach((task) => {
        if (task.active) taskCount.active++;
        if (task.newTask) taskCount.newTask++;
        if (task.completed) taskCount.completed++;
        if (task.failed) taskCount.failed++;
      });

      return { ...data, taskCount };
    };

    const updatedEmployees = updateTaskCounts(employees.data);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: employees.role, data: updatedEmployees })
    );
  } else {
    console.error("Invalid employee data or missing tasks", employees);
  }
};
