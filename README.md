# Task Overview
This is a psychological task designed to track new causal belief formation. It involves subjects learning to associate causes (foods) with effects (allergies in a fictitious patient). The task design captures 4 learning phenomena: Kamin Blocking (KB), Conditioned Inhibition (CI), Latent Inhibition (LI), Exctintion (Ex)

The scenario is as follows: subjects imagine they are an allergist and they are charged with figuring our which foods cause allergies in a fictitious patient and which ones do not. They see each meal he has eaten (comprised of one or two different foods) , for 3 seconds then they see whether or not an allergy happened (for one second). When a meal is on the screen, they make a prediction with a 2-alternative button push (allergy or no allergy).

# Alternate Versions
Three new versions were developed that (a) use different instructions/framing contexts (social vs. nonsocial), (b) different stimuli (social avatars vs. fractals), and (c) have shorter format based on Ongchoco et al. (2023)

# 3-phase Design  
learning_phase (ph1)    blocking_phase (ph2)    testing_phase (ph3)     condition_name
A+                      AB+                     B+                      KB_expt 
C-                      CD+                     D+                      KB_ctrl
E+                      EF-                     F+                      CI_expt
                        GH-                     H+                      CI_ctrl
I-                      I+                      I-                      LI_expt (ph1 and ph2) & filler (ph3) 
                        J+                      J-                      LI_ctrl (ph2) & Ex (ph2 and ph3)
                        K-                      K-                      fillers
                        L-                      L-                      fillers

p(+|element) = 0.5      p(+|element) = 0.5      p(+|element) = 0.5 
p(-|element) = 0.5      p(-|element) = 0.5      p(-|element) = 0.5 
                        p(+|compound) = 0.5
                        p(-|compound) = 0.5


Note: the probability of + or - within each phase is 50% (also in phase 2 this applies for compound and element cues)

# Cues (foods) identity within stim_shuffle 
                0   1   2   3   4   5   6   7   8   9   10  11
stim_shuffle = [A,  B,  C,  D,  E,  F,  G,  H,  I,  J,  K,  L]

# Task Duration
Phase 1: 4 trial types
in process...


# Git branches and latest version
If you want to use the latest version (v7 wrapper) this will be under the branch v7. Then you can clone it by: git clone --branch v7 --recurse-submodules git@github.com:belieflab/kaminBlocking.git kaminBlocking. The branch master is being used for CAPR project, and will be depricated after the project.


## Development Guide

#### Install and configure XAMPP:
1. [Download XAMPP](https://www.apachefriends.org/download.html) with PHP version 7.3.19
2. Open XAMPP and click "Start" to boot the XAMPP application.
3. Navigate to "Services" and click "Start All" button.
4. Navigate to "Network", select localhost:8080, and click "Enable".
5. Navigate to "Volumes" and click "Mount".

#### Clone the git repository:
6. Open Terminal and navigate to the htdocs directory:

    Mac/Linux:

        cd ~/.bitnami/stackman/machines/xampp/volumes/root/htdocs
    Windows:

        cd C:\\xampp\\htdocs

7. Clone into htdocs:

        git clone https://github.com/belieflab/foodAllergy.git

#### Modify permissions:
8. Copy this text into your terminal from the htdocs folder (the folder you are already in).

        sudo chmod -R 777 foodAllergy/
        
#### Start experiment:     
9. Click this URL: [http://localhost:8080/foodAllergy](http://localhost:8080/foodAllergy)
      
#### View the source code:  
10. Open the foodAllergy directory in a text editor of your choice. We prefer [Visual Studio Code](https://code.visualstudio.com/)

    Mac/Linux:

        cd ~/.bitnami/stackman/machines/xampp/volumes/root/htdocs/foodAllergy

    Windows:

        cd C:\\xampp\\htdocs\\foodAllergy

## Hosting Guide  

#### Clone the git repository:
1. Open Terminal and navigate to the your server's default directory:

    Apache Linux default directory:

        cd /var/www/html

2. Clone respository:

        git clone https://github.com/belieflab/foodAllery.git

#### Modify permissions:
3. Execute these two chmod commands in terminal from  /var/www/html (the directory you are already in).

        sudo chmod -R 755 foodAllergy/
        sudo chmod -R 777 foodAllergy/data
        
        
