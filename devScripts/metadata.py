import json
import random
from faker import Faker

fake = Faker()

# Generate random tech-related titles
tech_titles = [
    "Introduction to Machine Learning Algorithms",
    "Advanced JavaScript Concepts",
    "Cybersecurity Best Practices",
    "Big Data Analytics Techniques",
    "Cloud Computing Trends",
    "AI Applications in Healthcare",
    "Blockchain Technology Explained",
    "Quantum Computing Fundamentals",
    "Mobile App Development Strategies",
    "Internet of Things (IoT) Innovations"
]

# Generate random types
types = ["Blog", "Report", "Research", "Survey"]

# Generate random tech-related categories
tech_categories = [
    "Artificial Intelligence",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Cloud Computing",
    "Mobile Development",
    "Blockchain",
    "Internet of Things"
]

# Generate an array of 15 objects
blog_metadata = []
for i in range(1, 16):
    metadata = {
        "slug": f"blog-{i}",
        "title": random.choice(tech_titles),  # Selecting a unique tech-related title
        "date": fake.date_time_this_decade().strftime("%B %d, %Y"),  # Random date
        "category": random.choice(tech_categories),  # Selecting a tech-related category
        "type": random.choice(types),  # Selecting a random type
        "readTime": f"{random.randint(1, 6)} min",  # Random read time between 1 to 6 minutes
        "headerImage": f"/blog-{i}.png"  # Incrementing headerImage number from 1 to 15
    }
    blog_metadata.append(metadata)

# Output the generated metadata as JSON
with open("metadata.js", "w") as f:
    f.write(json.dumps(blog_metadata, indent=2))
