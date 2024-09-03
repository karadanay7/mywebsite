export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    icons: {
      dynamic: true,
    },
    card: {
      background: 'bg-white dark:bg-emerald-950',
      divide: "divide-y divide-gray-200 dark:divide-gray-600",
      ring: "ring-1 ring-gray-200 dark:ring-gray-600",

      shadow: "shadow-lg dark:shadow-gray-700 dark:shadow-lg",
      header: {
        padding: "px-4 py-3 sm:px-6",
      },
    },
  },
});
