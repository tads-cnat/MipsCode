from django.template.defaultfilters import register
from django import template
from datetime import datetime, timezone

register = template.Library()

@register.filter(name='hours_since')
def hours_since(value):
    if not value:
        return None
    now = datetime.now(timezone.utc)
    diff = now - value
    if diff.days > 365:
        return '{} ano atrás'.format(diff.days // 365)
    elif diff.days > 30:
        return '{} meses atrás'.format(diff.days // 30)
    elif diff.days > 0:
        return '{} dias atrás'.format(diff.days)
    elif diff.seconds > 3600:
        return '{} horas atrás'.format(diff.seconds // 3600)
    elif diff.seconds > 60:
        return '{} minutos atrás'.format(diff.seconds // 60)
    else:
        return 'agora mesmo'
    