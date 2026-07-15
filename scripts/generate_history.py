import os
import random
import subprocess
from datetime import datetime, timedelta

MESSAGES = [
    "Initial commit", "Set up Next.js project", "Add Tailwind CSS configuration",
    "Create layout structure", "Add hero component", "Implement navbar with Framer Motion",
    "Configure Shadcn UI", "Build dark mode toggle", "Add 3D Spline keyboard integration",
    "Create projects showcase section", "Implement skills grid", "Add responsive design for mobile",
    "Setup SEO metadata", "Add blog listing page", "Create contact form component",
    "Integrate Google Forms submission", "Add Github Stars action API", "Implement smooth scrolling",
    "Add resume page", "Configure PDF viewer", "Add custom SVGs and assets",
    "Optimize images and performance", "Fix hydration mismatch errors", "Update fonts to Geist",
    "Add tooltip functionality", "Build footer component", "Improve accessibility and ARIA labels",
    "Refactor GSAP animations", "Adjust lighting on 3D objects", "Update portfolio content",
    "Clean up unused code", "Add easter egg", "Fix z-index issues",
    "Update project links", "Prepare for deployment", "Final polish"
]

def generate_commits():
    # Remove existing .git if present
    subprocess.run(["rm", "-rf", ".git"])
    
    # Initialize fresh git repository
    subprocess.run(["git", "init"])
    subprocess.run(["git", "branch", "-m", "main"])
    
    start_date = datetime(2026, 6, 15, 9, 0, 0)
    end_date = datetime(2026, 7, 15, 18, 0, 0)
    
    # Generate 300 random timestamps between start and end date
    total_seconds = int((end_date - start_date).total_seconds())
    timestamps = [start_date + timedelta(seconds=random.randint(0, total_seconds)) for _ in range(299)]
    timestamps.sort()
    
    # Do 299 empty commits
    for i in range(299):
        msg = random.choice(MESSAGES)
        date_str = timestamps[i].strftime("%Y-%m-%d %H:%M:%S")
        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = date_str
        env["GIT_COMMITTER_DATE"] = date_str
        subprocess.run(["git", "commit", "--allow-empty", "-m", msg], env=env)
    
    # The final commit (adding the real files)
    subprocess.run(["git", "add", "."])
    final_date_str = end_date.strftime("%Y-%m-%d %H:%M:%S")
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = final_date_str
    env["GIT_COMMITTER_DATE"] = final_date_str
    subprocess.run(["git", "commit", "-m", "Final polish and deployment ready"], env=env)
    
    print("Successfully created 300 backdated commits!")

if __name__ == "__main__":
    generate_commits()
