## CHOWFAST-FE

### OVERVIEW
This is the front-facing interface for Chowfast built using Nextjs, Tailwind and ShadCN component library, It also doubles as a PWA pending the time that we have our mobile application fully up and running. Linting is set-up with Eslint and Husky has also been added to help manage our github commits.

### CONTRIBUTION APPROACH
The aim of any written software or program is to be totally definitive with nothing obscure or left to doubt (A function should be able to tell it's story without redundant comments), perfomant ( Efficiency is key to any application, so we want to keep our code minimal and deliver the best product as well.), and examinable ( Every single use case must pass leaving nothing to stray).

### SEPERATION OF CONCERNS

#### COMPONENTS
All components are to be in the ```component``` directory. This would also be subdivided into global components and page-sectioned components.
    - The ```component/ui``` directory contains components imported from the shadcn library.
    - Global components are to be in the ```component/global``` directory.
    - Components local to a page are to be in ```component/<page-where-component-exists>```.

#### UTILITY FUNCTIONS AND HOOKS
- Utility functions are to exist in the ```lib/utils``` directory.
  - This directory would have subdirectories that house a single file where the functions are written. For example, If we had a sign-in, user-registration function, we'll have a ```lib/utils/auth``` directory with a single ```index.ts``` file where all these functions would be written.
- Hooks are to exist in the ```lib/hooks``` directory.
  - This directory houses the different custom hooks written, for example hooks related to ```auth``` would be in a ```useAuth.ts``` hook in the ```lib/hooks``` directory.

##### CONTEXT
State that are required globally and within certain contexts are to be in the ```context``` directory, ```ThemeProviders``` and other providers that would be required would be written in seperate files.

#### STATES
As state management is very vital in any working application, The state of the application is to be managed using Redux-Toolkit (RTK). There is to be a ```slices``` directory that contains the seperate slices of state of the application. Each state to be managed is to have a directory for it's slices ```profileSlice``` directory would contain all necessary files for the ```profile``` state.

![image](https://github.com/ChowFast/CHOWFAST-FE/assets/56235240/4234eae6-72ef-443d-b50e-4093684c5154)     &nbsp; &nbsp;     ![image](https://github.com/ChowFast/CHOWFAST-FE/assets/56235240/95473f3c-b224-4633-979e-29bab05bea3d)


As seen in the iamge above, Here's how the folder structure would look.

#### VERSION CONTROL 
To keep our applications stable, Our codebase is to be in 3 branches, ```main```, ```dev```, ```test```. The ```main``` branch is the front-facing application for our consumers, It contains the ```LTS``` version of our application. The ```test``` branch is for the product manager to test exhaustively the features of our application, prior to pushing it to ```main```. The ```prod``` branch is what the devs are to work on. I'm debating whether we should have multiple brnaches per feature and have them merged and the branch deleted after, but I'd like no clutter.
