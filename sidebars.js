// @ts-check

/**
 * Sidebars configuration for projects.
 * Blog does not require explicit sidebar definition.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Sidebar for projects
  projectsSidebar: [
    {
      type: 'category',
      label: 'Projetos',
      items: [
        'projects/first-project', // Certifique-se de que esses arquivos existem em docs/projects/
        'projects/second-project',
        'projects/third-project',
      ],
    },
  ],
};

export default sidebars;
