from django.contrib import admin
from api import models as api_models

# admin.site.register(api_models.User, UserAdmin)
# admin.site.register(api_models.Profile, ProfileAdmin)

admin.site.register(api_models.User)
admin.site.register(api_models.Profile)
admin.site.register(api_models.Category)
admin.site.register(api_models.Post)
admin.site.register(api_models.Comment)
admin.site.register(api_models.Bookmark)
admin.site.register(api_models.Notification)