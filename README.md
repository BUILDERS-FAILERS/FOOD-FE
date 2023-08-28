## CHOWFAST-FE

### Overview
This is the front-facing interface for Chowfast built using Nextjs, Tailwind and ShadCN component library, It also doubles as a PWA pending the time that we have our mobile application fully up and running. Linting is set-up with Eslint and Husky has also been added to help manage our github commits.

### CONTRIBUTION APPROACH
The aim of any written software or program is to be totally definitive with nothing obscure or left to doubt (A function should be able to tell it's story without redundant comments), perfomant ( Efficiency is key to any application, so we want to keep our code minimal and deliver the best product as well.), and examinable ( Every single use case must pass leaving nothing to stray).

### SEPERATION OF CONCERNS

#### COMPONENTS
All components are to be in the ```component``` directory. This would also be subdivided into global components and page-sectioned components.
    - The ```component\ui``` directory contains components imported from the shadcn library.
    - Global components are to be in the ```component/global``` directory.
    - Components local to a page are to be in ```component/<page-where-component-exists>```.

#### UTILITY FUNCTIONS AND HOOKS
- Utility functions are to exist in the ```lib/utils``` directory.
  - This directory would have subdirectories that house a single file where the functions are written. For example, If we had a sign-in, user-registration function, we'll have a ```lib/utils/auth``` directory with a single ```index.ts``` file where all these functions would be written.
- Hooks are to exist in the ```lib/hooks``` directory.
  - This directory houses the different custom hooks written, for example hooks related to ```auth``` would be in a ```useAuth.ts``` hook in the ```lib/hooks``` directory.
